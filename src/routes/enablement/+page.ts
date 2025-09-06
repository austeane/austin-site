import enablementData from '$lib/data/enablement.json';

export const prerender = true;

export async function load() {
  // Import data directly for prerendering
  // External consumers still use /data/enablement.json endpoint
  return {
    enablement: enablementData
  };
}