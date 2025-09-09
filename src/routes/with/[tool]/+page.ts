import type { PageLoad } from './$types';
import { PROVIDERS } from '$lib/providers';

/**
 * SSR-only host page for clean '/with/<tool>' URLs.
 * We intentionally do NOT prerender this page.
 * The actual variant UI is static at /variants/<tool>/index.html and is iframed here.
 * Reason: CloudFront/SST won't auto-map '/with/foo' → '/with/foo/index.html'.
 * SSR guarantees direct access returns 200 without edge rewrites.
 */
export const prerender = false;

export const load: PageLoad = async ({ params }) => {
  const provider = PROVIDERS.find((p) => p.id === params.tool);
  return {
    provider,
    providers: PROVIDERS
  };
};
