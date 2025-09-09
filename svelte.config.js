import adapter from 'svelte-kit-sst';

// Known AI variant IDs (keep in sync with src/lib/providers.ts; exclude 'minimal')
const variantIds = [
  'claude-code',
  'gpt-5-pro',
  'gpt-5-thinking',
  'lovable',
  'bolt',
  'firebase',
];

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: { 
      entries: [
        '*',
        // Note: /with/* routes are handled by SSR to support direct URL access
        // SST doesn't correctly serve prerendered files without .html extension
      ],
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
