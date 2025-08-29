import adapter from 'svelte-kit-sst';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: { entries: ['*'] }
  }
};

export default config;