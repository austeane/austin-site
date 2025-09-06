import type { PageLoad } from './$types';
import resumeData from '$lib/data/resume.json';

export const prerender = true;

export const load: PageLoad = async () => {
  // Import data directly for prerendering
  // External consumers still use /data/resume.json endpoint
  return { resume: resumeData };
};