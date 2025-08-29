import type { PageLoad } from './$types';
import { PROVIDERS } from '$lib/providers';

export const prerender = true;

export const load: PageLoad = async ({ params }) => {
  const provider = PROVIDERS.find((p) => p.id === params.tool);
  return {
    provider,
    providers: PROVIDERS
  };
};