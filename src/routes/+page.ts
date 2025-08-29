import type { PageLoad } from './$types';

export const prerender = true;

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch('/data/resume.json');
  if (!res.ok) throw new Error('Failed to load resume.json');
  const resume = await res.json();
  return { resume };
};