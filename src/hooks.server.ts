import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
  // Add CORS headers for /data/* endpoints
  if (event.url.pathname.startsWith('/data/')) {
    const response = await resolve(event);
    
    // Set CORS headers to allow cross-origin access
    response.headers.set('Access-Control-Allow-Origin', '*');
    response.headers.set('Access-Control-Allow-Methods', 'GET, OPTIONS');
    response.headers.set('Access-Control-Allow-Headers', '*');
    
    return response;
  }
  
  return resolve(event);
};