import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url }) => {
  const path = url.pathname;
  const match = /^\/with\/([^/]+)/.exec(path);
  const currentProviderId = match ? match[1] : 'minimal';
  const isOnHome = path === '/';
  const isOnEnablement = path.includes('/enablement');
  const isOnBlog = path.startsWith('/blog');
  const isVariantRoute = path.startsWith('/with/');
  const isExternalPath = path.startsWith('/azure/next') || path.startsWith('/gcp/');
  return { currentProviderId, isOnHome, isOnEnablement, isOnBlog, isVariantRoute, isExternalPath };
};
