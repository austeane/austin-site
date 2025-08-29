import type { LayoutLoad } from './$types';

export const load: LayoutLoad = ({ url }) => {
  const path = url.pathname;
  const match = /^\/with\/([^/]+)/.exec(path);
  const currentProviderId = match ? match[1] : 'minimal';
  const isOnEnablement = path.includes('/enablement');
  return { currentProviderId, isOnEnablement };
};