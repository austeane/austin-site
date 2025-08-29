import fs from 'node:fs/promises';
import path from 'node:path';
import { HtmlValidate } from 'html-validate';
import * as cheerio from 'cheerio';

const ROOT = path.resolve(process.cwd());
const VARIANTS_DIR = path.join(ROOT, 'static', 'variants');

const validator = new HtmlValidate({
  extends: ['html-validate:recommended'],
  rules: {
    'no-dup-class': 'error',
    'no-trailing-whitespace': 'warn',
    // Allow inline styles; variants are self-contained
    'no-inline-style': 'off'
  }
});

async function validateVariant(dir, page = 'resume') {
  // Check for both single-file and bundle variants
  const variantPath = page === 'resume' 
    ? path.join(VARIANTS_DIR, dir)
    : path.join(VARIANTS_DIR, dir, page);
  
  const entry = path.join(variantPath, 'index.html');
  
  // Check if variant exists
  try {
    await fs.access(entry);
  } catch {
    console.log(`ℹ ${dir}/${page}: Not implemented yet`);
    return;
  }
  
  const html = await fs.readFile(entry, 'utf8');
  
  // Check if it's a bundle (has separate JS/CSS files)
  const isBundle = await checkForBundle(variantPath);

  // 1) HTML semantics
  const result = await validator.validateString(html);
  if (!result.valid) {
    console.error(`✖ ${dir}: HTML validation failed`);
    if (result.results && result.results.length > 0) {
      result.results.forEach((r) => {
        if (r.messages && r.messages.length > 0) {
          r.messages.forEach((m) =>
            console.error(`  ${m.ruleId} [${m.severity}] ${m.message} @ line ${m.line}:${m.column}`)
          );
        }
      });
    }
    throw new Error('HTML validation failed');
  }

  // 2) Minimal policy checks - check for either resume.json or enablement.json
  const hasFetchResume = /fetch\(['"`]\/data\/resume\.json['"`]\)/.test(html);
  const hasFetchEnablement = /fetch\(['"`]\/data\/enablement\.json['"`]\)/.test(html);
  
  if (page === 'resume' && !hasFetchResume) {
    console.warn(`! ${dir}/${page}: Did not find fetch('/data/resume.json') — ensure variant reads the shared resume data`);
  } else if (page === 'enablement' && !hasFetchEnablement) {
    console.warn(`! ${dir}/${page}: Did not find fetch('/data/enablement.json') — ensure variant reads the shared enablement data`);
  }

  const hasPostMessage = /postMessage\s*\(\s*\{\s*type\s*:\s*['"`]variant:height['"`]/.test(html);
  if (!hasPostMessage && !isBundle) {
    console.warn(`! ${dir}/${page}: No postMessage({ type: 'variant:height', ... }) — iframe may not auto-size`);
  }

  // 3) Basic link checks for local assets
  const $ = cheerio.load(html);
  const assetPaths = [];
  $('link[href], script[src], img[src]').each((_, el) => {
    const attr = el.name === 'link' ? 'href' : 'src';
    const url = $(el).attr(attr);
    if (!url) return;
    if (url.startsWith('http')) return; // allow external (discouraged but not blocked)
    const abs = path.join(variantPath, url.replace(/^\//, '')); // relative to variant path
    assetPaths.push(abs);
  });
  for (const p of assetPaths) {
    try {
      await fs.access(p);
    } catch {
      console.warn(`! ${dir}/${page}: Missing local asset referenced by HTML -> ${p}`);
    }
  }

  if (isBundle) {
    console.log(`✔ ${dir}/${page}: OK (bundle variant)`);
  } else {
    console.log(`✔ ${dir}/${page}: OK (single-file variant)`);
  }
}

async function checkForBundle(variantPath) {
  try {
    const files = await fs.readdir(variantPath);
    const hasJS = files.some(f => f.endsWith('.js'));
    const hasCSS = files.some(f => f.endsWith('.css'));
    return hasJS || hasCSS;
  } catch {
    return false;
  }
}

async function main() {
  const entries = await fs.readdir(VARIANTS_DIR, { withFileTypes: true }).catch(() => []);
  const dirs = entries.filter((d) => d.isDirectory()).map((d) => d.name);
  if (!dirs.length) {
    console.log('No variants found in static/variants. Add at least one folder.');
    return;
  }
  
  console.log('\n📋 Validating resume variants...');
  for (const d of dirs) await validateVariant(d, 'resume');
  
  console.log('\n📘 Validating enablement variants...');
  for (const d of dirs) await validateVariant(d, 'enablement');
  
  console.log('\n✅ Validation complete!');
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});