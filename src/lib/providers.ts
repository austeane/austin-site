export type Provider = {
  id: string;
  name: string;
  path: string;        // static path to variant entry
  noindex?: boolean;   // whether to add robots noindex on /with/[tool]
  icon?: string;       // emoji or text icon for the provider
  logo?: string;       // path to logo image
  color?: string;      // accent color for the provider
  comingSoon?: boolean; // whether this variant is still being developed
  isDeployment?: boolean; // whether this is a deployment variant (external)
  externalUrl?: string;   // full URL for external deployments
};

// AI-styled variants (static HTML in /static/variants/)
export const PROVIDERS: Provider[] = [
  { id: 'minimal', name: 'Minimal', path: '/', icon: '◐', color: '#000' },
  { id: 'claude-code', name: 'Claude Code', path: '/variants/claude-code/index.html', noindex: true, icon: '◈', logo: '/logos/claude.svg', color: '#d97706' },
  { id: 'gpt-5-pro', name: 'GPT-5 Pro', path: '/variants/gpt-5-pro/index.html', noindex: true, icon: '⚡', logo: '/logos/chatgpt.svg', color: '#10a37f' },
  { id: 'gpt-5-thinking', name: 'GPT-5 Thinking', path: '/variants/gpt-5-thinking/index.html', noindex: true, icon: '🧠', logo: '/logos/chatgpt.svg', color: '#10a37f' },
  { id: 'lovable', name: 'Lovable', path: '/variants/lovable/index.html', noindex: true, icon: '♥', logo: '/logos/lovable.png', color: '#ff006e' },
  { id: 'bolt', name: 'Bolt', path: '/variants/bolt/index.html', noindex: true, icon: '⚡', logo: '/logos/bolt.jpg', color: '#f59e0b' },
  { id: 'firebase', name: 'Firebase Studio', path: '/variants/firebase/index.html', noindex: true, icon: '🔥', logo: '/logos/firebase.svg', color: '#039BE5' },
];

// Deployment variants (external framework deployments via CloudFront)
export const DEPLOYMENT_VARIANTS: Provider[] = [
  {
    id: 'sveltekit-aws',
    name: 'SvelteKit (AWS)',
    path: '/',
    isDeployment: true,
    externalUrl: 'https://www.austinwallace.ca',
    icon: '🚀',
    logo: '/logos/aws.png',
    color: '#FF9900',
    noindex: false
  },
  {
    id: 'nextjs-vercel',
    name: 'Next.js (Vercel)',
    path: '/vercel/next',
    isDeployment: true,
    externalUrl: 'https://www.austinwallace.ca/vercel/next',
    icon: '▲',
    logo: '/logos/vercel.svg',
    color: '#000',
    noindex: true
  },
  {
    id: 'tanstack-netlify',
    name: 'TanStack (Netlify)',
    path: '/gcp/tanstack',
    isDeployment: true,
    externalUrl: 'https://www.austinwallace.ca/gcp/tanstack',
    icon: '🔷',
    logo: '/logos/netlify.svg',
    color: '#00C7B7',
    noindex: true
  },
];