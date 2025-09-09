import type { Handle } from '@sveltejs/kit';

// Add a small set of security headers. Edge/CDN should also set these,
// but adding here covers dynamic routes (`/data/*`, etc.).
export const handle: Handle = async ({ event, resolve }) => {
  const response = await resolve(event);

  const csp = [
    "default-src 'self'",
    "img-src 'self' data: https:",
    "script-src 'self'",
    "style-src 'self' 'unsafe-inline'",
    "frame-src 'self'",
    "object-src 'none'",
    "base-uri 'none'"
  ].join('; ');

  response.headers.set('Content-Security-Policy', csp);
  response.headers.set('X-Content-Type-Options', 'nosniff');
  response.headers.set('X-Frame-Options', 'SAMEORIGIN');
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin');
  response.headers.set('Strict-Transport-Security', 'max-age=31536000; includeSubDomains; preload');
  // Belt-and-suspenders: prevent indexing of deployment mirrors
  if (/^\/(azure|gcp)\//.test(event.url.pathname)) {
    response.headers.set('X-Robots-Tag', 'noindex');
  }

  return response;
};
