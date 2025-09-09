import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import enablementData from '$lib/data/enablement.json';
import crypto from 'crypto';

export const prerender = false;

// Generate ETag based on content hash
const generateETag = (data: any): string => {
  const content = JSON.stringify(data);
  return `"${crypto.createHash('md5').update(content).digest('hex')}"`;
};

export const GET: RequestHandler = ({ request }) => {
  const etag = generateETag(enablementData);
  const ifNoneMatch = request.headers.get('if-none-match');
  
  // Check if client has current version
  if (ifNoneMatch === etag) {
    return new Response(null, {
      status: 304,
      headers: {
        'ETag': etag,
        'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
        // CORS must be present on 304 as well
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET, OPTIONS',
        'Access-Control-Allow-Headers': '*'
      }
    });
  }
  
  return json(enablementData, {
    headers: {
      'ETag': etag,
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    }
  });
};

export function OPTIONS() {
  return new Response(null, { 
    status: 200,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, OPTIONS',
      'Access-Control-Allow-Headers': '*'
    }
  });
}
