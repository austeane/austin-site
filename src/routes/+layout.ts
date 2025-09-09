import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url }) => {
  const path = url.pathname;
  const match = /^\/with\/([^/]+)/.exec(path);
  const currentProviderId = match ? match[1] : 'minimal';
  const isOnEnablement = path.includes('/enablement');
  const isVariantRoute = path.startsWith('/with/');
  const isExternalPath = path.startsWith('/azure/') || path.startsWith('/gcp/');
  return { currentProviderId, isOnEnablement, isVariantRoute, isExternalPath };
};
