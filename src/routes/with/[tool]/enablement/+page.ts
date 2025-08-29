import { error } from '@sveltejs/kit';
import { PROVIDERS } from '$lib/providers';

export async function load({ params }) {
  const provider = PROVIDERS.find(p => p.id === params.tool);
  
  if (!provider) {
    throw error(404, `Provider "${params.tool}" not found`);
  }
  
  return {
    provider,
    tool: params.tool
  };
}