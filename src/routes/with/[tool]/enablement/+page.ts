import { error } from '@sveltejs/kit';
import { PROVIDERS } from '$lib/providers';
import enablementData from '$lib/data/enablement.json';

/**
 * SSR-only host page for clean '/with/<tool>/enablement' URLs.
 * We intentionally do NOT prerender this page.
 * The actual variant UI is static at /variants/<tool>/enablement/index.html and is iframed here.
 * Reason: CloudFront/SST won't auto-map '/with/foo/enablement' → '/with/foo/enablement/index.html'.
 * SSR guarantees direct access returns 200 without edge rewrites.
 */
export const prerender = false;

export async function load({ params }) {
  const provider = PROVIDERS.find(p => p.id === params.tool);

  if (!provider) {
    throw error(404, `Provider "${params.tool}" not found`);
  }

  return {
    provider,
    tool: params.tool,
    enablement: enablementData
  };
}
