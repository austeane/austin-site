#!/usr/bin/env npx tsx
/**
 * CloudFront Access Logs Analytics
 *
 * Pulls logs from S3 and displays analytics dashboard.
 * Usage: npx tsx scripts/analytics.ts [--days N] [--blog-only]
 */

import { S3Client, ListObjectsV2Command, GetObjectCommand } from '@aws-sdk/client-s3';
import { createGunzip } from 'zlib';
import { Readable } from 'stream';

// Config
const AWS_REGION = 'us-east-1';
const LOG_PREFIX = 'cloudfront/';

interface LogEntry {
  date: string;
  time: string;
  edgeLocation: string;
  bytes: number;
  ip: string;
  method: string;
  host: string;
  uri: string;
  status: number;
  referer: string;
  userAgent: string;
  queryString: string;
  timeTaken: number;
}

interface Analytics {
  totalRequests: number;
  totalBytes: number;
  uniqueIPs: Set<string>;
  pageViews: Map<string, number>;
  blogViews: Map<string, number>;
  referrers: Map<string, number>;
  statusCodes: Map<number, number>;
  dailyViews: Map<string, number>;
  topUserAgents: Map<string, number>;
  edgeLocations: Map<string, number>;
}

// Parse command line args
function parseArgs(): { days: number; blogOnly: boolean; bucketName?: string } {
  const args = process.argv.slice(2);
  let days = 7;
  let blogOnly = false;
  let bucketName: string | undefined;

  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--days' && args[i + 1]) {
      days = parseInt(args[i + 1], 10);
      i++;
    } else if (args[i] === '--blog-only') {
      blogOnly = true;
    } else if (args[i] === '--bucket' && args[i + 1]) {
      bucketName = args[i + 1];
      i++;
    }
  }

  return { days, blogOnly, bucketName };
}

// Get bucket name from SST outputs
async function getBucketName(): Promise<string> {
  const fs = await import('fs');
  const path = await import('path');

  // Try to read from .sst/outputs.json
  const outputsPath = path.join(process.cwd(), '.sst', 'outputs.json');

  if (fs.existsSync(outputsPath)) {
    const outputs = JSON.parse(fs.readFileSync(outputsPath, 'utf-8'));
    // SST outputs are nested by stage
    for (const stage of Object.values(outputs) as any[]) {
      if (stage.logsBucket) {
        return stage.logsBucket;
      }
    }
  }

  throw new Error(
    'Could not find logs bucket. Either:\n' +
    '  1. Deploy first: AWS_PROFILE=prod npx sst deploy --stage production\n' +
    '  2. Pass bucket name: npx tsx scripts/analytics.ts --bucket BUCKET_NAME'
  );
}

// Parse CloudFront log line
function parseLogLine(line: string): LogEntry | null {
  // Skip comments and empty lines
  if (line.startsWith('#') || !line.trim()) return null;

  const fields = line.split('\t');
  if (fields.length < 15) return null;

  return {
    date: fields[0],
    time: fields[1],
    edgeLocation: fields[2],
    bytes: parseInt(fields[3], 10) || 0,
    ip: fields[4],
    method: fields[5],
    host: fields[6],
    uri: decodeURIComponent(fields[7] || ''),
    status: parseInt(fields[8], 10) || 0,
    referer: fields[9] === '-' ? '' : fields[9],
    userAgent: fields[10] || '',
    queryString: fields[11] || '',
    timeTaken: parseFloat(fields[17]) || 0,
  };
}

// Download and parse a single log file
async function parseLogFile(s3: S3Client, bucket: string, key: string): Promise<LogEntry[]> {
  const entries: LogEntry[] = [];

  try {
    const response = await s3.send(new GetObjectCommand({ Bucket: bucket, Key: key }));
    if (!response.Body) return entries;

    const stream = response.Body as Readable;
    const gunzip = createGunzip();
    const decompressed = stream.pipe(gunzip);

    let data = '';
    for await (const chunk of decompressed) {
      data += chunk.toString();
    }

    for (const line of data.split('\n')) {
      const entry = parseLogLine(line);
      if (entry) entries.push(entry);
    }
  } catch (err: any) {
    if (err.code !== 'NoSuchKey') {
      console.error(`Error parsing ${key}:`, err.message);
    }
  }

  return entries;
}

// List log files from S3
async function listLogFiles(s3: S3Client, bucket: string, daysBack: number): Promise<string[]> {
  const keys: string[] = [];
  const cutoffDate = new Date();
  cutoffDate.setDate(cutoffDate.getDate() - daysBack);

  let continuationToken: string | undefined;

  do {
    const response = await s3.send(new ListObjectsV2Command({
      Bucket: bucket,
      Prefix: LOG_PREFIX,
      ContinuationToken: continuationToken,
    }));

    for (const obj of response.Contents || []) {
      if (obj.Key && obj.LastModified && obj.LastModified >= cutoffDate) {
        keys.push(obj.Key);
      }
    }

    continuationToken = response.NextContinuationToken;
  } while (continuationToken);

  return keys;
}

// Analyze log entries
function analyzeEntries(entries: LogEntry[], blogOnly: boolean): Analytics {
  const analytics: Analytics = {
    totalRequests: 0,
    totalBytes: 0,
    uniqueIPs: new Set(),
    pageViews: new Map(),
    blogViews: new Map(),
    referrers: new Map(),
    statusCodes: new Map(),
    dailyViews: new Map(),
    topUserAgents: new Map(),
    edgeLocations: new Map(),
  };

  for (const entry of entries) {
    // Filter to relevant requests
    if (entry.method !== 'GET') continue;
    if (entry.uri.includes('/assets/') || entry.uri.includes('/_app/')) continue;
    if (entry.uri.match(/\.(js|css|png|jpg|jpeg|gif|ico|woff|woff2|svg|map)$/)) continue;

    // Blog filter
    const isBlogPage = entry.uri.startsWith('/blog');
    if (blogOnly && !isBlogPage) continue;

    analytics.totalRequests++;
    analytics.totalBytes += entry.bytes;
    analytics.uniqueIPs.add(entry.ip);

    // Page views
    const uri = entry.uri.split('?')[0]; // Remove query string
    analytics.pageViews.set(uri, (analytics.pageViews.get(uri) || 0) + 1);

    // Blog views
    if (isBlogPage) {
      analytics.blogViews.set(uri, (analytics.blogViews.get(uri) || 0) + 1);
    }

    // Referrers (exclude self and empty)
    if (entry.referer && !entry.referer.includes('austinwallace.ca')) {
      try {
        const refHost = new URL(entry.referer).hostname;
        analytics.referrers.set(refHost, (analytics.referrers.get(refHost) || 0) + 1);
      } catch {}
    }

    // Status codes
    analytics.statusCodes.set(entry.status, (analytics.statusCodes.get(entry.status) || 0) + 1);

    // Daily views
    analytics.dailyViews.set(entry.date, (analytics.dailyViews.get(entry.date) || 0) + 1);

    // Edge locations
    analytics.edgeLocations.set(
      entry.edgeLocation,
      (analytics.edgeLocations.get(entry.edgeLocation) || 0) + 1
    );

    // User agents (simplified)
    const ua = simplifyUserAgent(entry.userAgent);
    analytics.topUserAgents.set(ua, (analytics.topUserAgents.get(ua) || 0) + 1);
  }

  return analytics;
}

function simplifyUserAgent(ua: string): string {
  if (ua.includes('Chrome')) return 'Chrome';
  if (ua.includes('Firefox')) return 'Firefox';
  if (ua.includes('Safari')) return 'Safari';
  if (ua.includes('Edge')) return 'Edge';
  if (ua.includes('bot') || ua.includes('Bot') || ua.includes('crawler')) return 'Bot';
  if (ua.includes('curl')) return 'curl';
  return 'Other';
}

// Format bytes
function formatBytes(bytes: number): string {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} KB`;
  if (bytes < 1024 * 1024 * 1024) return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} GB`;
}

// Sort map by value descending
function sortMap<K>(map: Map<K, number>, limit = 10): [K, number][] {
  return [...map.entries()]
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit);
}

// Bar chart for terminal
function barChart(items: [string, number][], maxWidth = 30): string {
  if (items.length === 0) return '  (no data)';

  const maxValue = Math.max(...items.map(([, v]) => v));
  const maxLabelLen = Math.max(...items.map(([k]) => k.length));

  return items.map(([label, value]) => {
    const barLen = Math.round((value / maxValue) * maxWidth);
    const bar = '█'.repeat(barLen) + '░'.repeat(maxWidth - barLen);
    return `  ${label.padEnd(maxLabelLen)} ${bar} ${value}`;
  }).join('\n');
}

// Print dashboard
function printDashboard(analytics: Analytics, days: number, blogOnly: boolean): void {
  const divider = '─'.repeat(60);

  console.log('\n' + divider);
  console.log(`  📊 CLOUDFRONT ANALYTICS ${blogOnly ? '(Blog Only)' : ''}`);
  console.log(`  Last ${days} days`);
  console.log(divider);

  // Overview
  console.log('\n📈 OVERVIEW');
  console.log(`  Total Page Views:    ${analytics.totalRequests.toLocaleString()}`);
  console.log(`  Unique Visitors:     ${analytics.uniqueIPs.size.toLocaleString()}`);
  console.log(`  Total Bandwidth:     ${formatBytes(analytics.totalBytes)}`);

  // Status codes
  console.log('\n📋 STATUS CODES');
  const statusItems = sortMap(analytics.statusCodes, 5)
    .map(([code, count]): [string, number] => [`${code}`, count]);
  console.log(barChart(statusItems, 20));

  // Top pages
  console.log('\n📄 TOP PAGES');
  const pageItems = sortMap(analytics.pageViews, 10)
    .map(([uri, count]): [string, number] => [uri.substring(0, 40), count]);
  console.log(barChart(pageItems, 20));

  // Blog views (if not already filtered)
  if (!blogOnly && analytics.blogViews.size > 0) {
    console.log('\n📝 BLOG POSTS');
    const blogItems = sortMap(analytics.blogViews, 10)
      .map(([uri, count]): [string, number] => [uri.replace('/blog/', '').substring(0, 35), count]);
    console.log(barChart(blogItems, 20));
  }

  // Referrers
  if (analytics.referrers.size > 0) {
    console.log('\n🔗 TOP REFERRERS');
    const refItems = sortMap(analytics.referrers, 5)
      .map(([host, count]): [string, number] => [host.substring(0, 30), count]);
    console.log(barChart(refItems, 20));
  }

  // Browsers
  console.log('\n🌐 BROWSERS');
  const browserItems = sortMap(analytics.topUserAgents, 5)
    .map(([ua, count]): [string, number] => [ua, count]);
  console.log(barChart(browserItems, 20));

  // Daily traffic
  console.log('\n📅 DAILY TRAFFIC');
  const dailyItems = sortMap(analytics.dailyViews, 14)
    .sort((a, b) => a[0].localeCompare(b[0])) // Sort by date
    .map(([date, count]): [string, number] => [date, count]);
  console.log(barChart(dailyItems, 20));

  // Edge locations (geographic distribution)
  console.log('\n🌍 EDGE LOCATIONS (Top 5)');
  const edgeItems = sortMap(analytics.edgeLocations, 5)
    .map(([loc, count]): [string, number] => [loc, count]);
  console.log(barChart(edgeItems, 20));

  console.log('\n' + divider + '\n');
}

// Main
async function main(): Promise<void> {
  const { days, blogOnly, bucketName: argBucket } = parseArgs();

  console.log('🔍 Fetching CloudFront access logs...\n');

  const bucket = argBucket || await getBucketName();
  console.log(`  Bucket: ${bucket}`);
  console.log(`  Days:   ${days}`);
  console.log(`  Filter: ${blogOnly ? 'Blog only' : 'All pages'}`);

  const s3 = new S3Client({ region: AWS_REGION });

  // List log files
  const logFiles = await listLogFiles(s3, bucket, days);
  console.log(`\n  Found ${logFiles.length} log files`);

  if (logFiles.length === 0) {
    console.log('\n⚠️  No log files found. CloudFront logs may take 1-2 hours to appear after enabling.');
    console.log('   Make sure you\'ve deployed with: AWS_PROFILE=prod npx sst deploy --stage production\n');
    return;
  }

  // Parse all log files
  console.log('  Parsing logs...');
  const allEntries: LogEntry[] = [];

  let processed = 0;
  for (const key of logFiles) {
    const entries = await parseLogFile(s3, bucket, key);
    allEntries.push(...entries);
    processed++;
    if (processed % 10 === 0) {
      process.stdout.write(`\r  Processed ${processed}/${logFiles.length} files...`);
    }
  }
  console.log(`\r  Processed ${logFiles.length} files, ${allEntries.length.toLocaleString()} entries`);

  // Analyze
  const analytics = analyzeEntries(allEntries, blogOnly);

  // Print dashboard
  printDashboard(analytics, days, blogOnly);
}

main().catch((err) => {
  console.error('Error:', err.message);
  process.exit(1);
});
