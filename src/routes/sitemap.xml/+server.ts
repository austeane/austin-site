import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
  const urls = ['/', '/enablement'].map(
    (p) => `<url><loc>https://www.austinwallace.ca${p}</loc></url>`
  );
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  ${urls.join('\n  ')}
</urlset>`;
  
  return new Response(xml, {
    headers: { 
      'content-type': 'application/xml', 
      'cache-control': 'public, max-age=3600' 
    }
  });
};