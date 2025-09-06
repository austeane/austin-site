import adapter from 'svelte-kit-sst';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: { 
      entries: ['*'],
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore 404 errors for external routes that will be handled by SST Router
        if (path.startsWith('/azure/') || path.startsWith('/gcp/') || path.startsWith('/variants/')) {
          return;
        }
        
        // Throw error for other cases
        throw new Error(message);
      },
      handleMissingId: ({ path, id, referrers }) => {
        // Ignore missing ID warnings for now
        console.warn(`Missing ID "${id}" on ${path} referenced by: ${referrers.join(', ')}`);
      }
    }
  }
};

export default config;