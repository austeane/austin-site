import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /with/',
    'Sitemap: /sitemap.xml' // optional; remove if not generating one
  ].join('\n');

  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600'
    }
  });
};