import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Layout.css';

type Provider = {
  id: string;
  name: string;
  icon?: string;
  logo?: string;
  color?: string;
  comingSoon?: boolean;
  isDeployment?: boolean;
  externalUrl?: string;
};

const AI_PROVIDERS: Provider[] = [
  { id: 'minimal', name: 'Minimal', icon: '◐', color: '#000' },
  { id: 'claude-code', name: 'Claude Code', icon: '◈', logo: '/logos/claude.svg', color: '#d97706' },
  { id: 'gpt-5-pro', name: 'GPT-5 Pro', icon: '⚡', logo: '/logos/chatgpt.svg', color: '#10a37f' },
  { id: 'gpt-5-thinking', name: 'GPT-5 Thinking', icon: '🧠', logo: '/logos/chatgpt.svg', color: '#10a37f' },
  { id: 'lovable', name: 'Lovable', icon: '♥', logo: '/logos/lovable.png', color: '#ff006e' },
  { id: 'bolt', name: 'Bolt', icon: '⚡', logo: '/logos/bolt.jpg', color: '#f59e0b' },
  { id: 'firebase', name: 'Firebase Studio', icon: '🔥', logo: '/logos/firebase.svg', color: '#039BE5' },
];

const DEPLOYMENT_VARIANTS: Provider[] = [
  { 
    id: 'sveltekit-aws', 
    name: 'SvelteKit (AWS)', 
    isDeployment: true,
    externalUrl: 'https://www.austinwallace.ca',
    icon: '🚀', 
    color: '#ff3e00'
  },
  { 
    id: 'nextjs-vercel', 
    name: 'Next.js (Vercel)', 
    isDeployment: true,
    externalUrl: 'https://www.austinwallace.ca/azure/next',
    icon: '▲', 
    color: '#000'
  },
  { 
    id: 'react-azure', 
    name: 'React (Azure)', 
    isDeployment: true,
    externalUrl: 'https://www.austinwallace.ca/azure/react',
    icon: '⚛️', 
    color: '#0078d4'
  },
  { 
    id: 'tanstack-netlify', 
    name: 'TanStack (Netlify)', 
    isDeployment: true,
    externalUrl: 'https://www.austinwallace.ca/gcp/tanstack',
    icon: '🔷', 
    color: '#00C7B7'
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [showDeploymentVariants, setShowDeploymentVariants] = useState(false);
  const [userToggled, setUserToggled] = useState(false);

  const pathname = location.pathname;
  // Handle both local dev (/with/) and production (/azure/react/with/) paths
  const isWithRoute = pathname.includes('/with/');
  const isEnablement = pathname.includes('/enablement');
  const currentProviderId = isWithRoute 
    ? pathname.split('/with/')[1]?.split('/')[0] 
    : 'minimal';

  // Default the sidebar to Deploy Variants on /with/<tool> routes
  useEffect(() => {
    if (!userToggled) {
      setShowDeploymentVariants(isWithRoute);
    }
  }, [isWithRoute, userToggled]);

  const activeProviders = showDeploymentVariants ? DEPLOYMENT_VARIANTS : AI_PROVIDERS;
  const currentProvider = [...AI_PROVIDERS, ...DEPLOYMENT_VARIANTS].find(p => p.id === currentProviderId) || AI_PROVIDERS[0];

  const toggleVariantType = () => {
    setUserToggled(true);
    setShowDeploymentVariants(!showDeploymentVariants);
  };

  const getProviderPath = (targetPage: 'resume' | 'enablement') => {
    return targetPage === 'resume'
      ? (currentProviderId === 'minimal' ? '/resume' : `/with/${currentProviderId}`)
      : (currentProviderId === 'minimal' ? '/enablement' : `/with/${currentProviderId}/enablement`);
  };

  const handleProviderClick = (e: React.MouseEvent, provider: Provider) => {
    if (provider.comingSoon) {
      e.preventDefault();
      return;
    }
  };

  return (
    <div className="layout-container">
      <nav className="sidebar" aria-label="Variants">
        <button 
          className="variant-toggle" 
          onClick={toggleVariantType}
          aria-pressed={showDeploymentVariants}
          aria-label={showDeploymentVariants ? 'Show AI variants' : 'Show deployment variants'}
          title="Switch between AI-styled and deployment variants"
        >
          <span className="variant-toggle-icon" aria-hidden="true">
            {showDeploymentVariants ? '🚀' : '🤖'}
          </span>
          <span className="variant-toggle-label">
            {showDeploymentVariants ? 'Deploy\nVariants' : 'AI\nVariants'}
          </span>
        </button>
        
        <div className="sidebar-divider"></div>
        
        {activeProviders.map((provider) => {
          const providerHref = provider.isDeployment
            ? (
                currentProviderId === 'minimal'
                  ? provider.externalUrl
                  // All deployment variants now use their app routes, not static HTML
                  : `${provider.externalUrl}/with/${currentProviderId}${isEnablement ? '/enablement' : ''}`
              )
            : provider.comingSoon 
              ? '#' 
              : provider.id === 'minimal' 
                ? (isEnablement ? '/enablement' : '/')
                : (isEnablement ? `/with/${provider.id}/enablement` : `/with/${provider.id}`);

          const isActive = currentProvider?.id === provider.id;

          if (provider.isDeployment) {
            return (
              <a
                key={provider.id}
                href={providerHref}
                className={`sidebar-item ${isActive ? 'active' : ''} ${provider.comingSoon ? 'coming-soon' : ''}`}
                aria-label={`${provider.name}${provider.comingSoon ? ' (coming soon)' : ''}${provider.isDeployment ? ' - opens in new tab' : ''}`}
                style={{ '--accent-color': provider.color || '#000' } as React.CSSProperties}
                title={`${provider.name}${provider.comingSoon ? ' (coming soon)' : ''}${provider.isDeployment ? ' (external deployment)' : ''}`}
                onClick={(e) => handleProviderClick(e, provider)}
                target="_blank"
                rel="noopener noreferrer"
              >
                {provider.logo ? (
                  <img src={provider.logo} alt={provider.name} className="sidebar-logo" />
                ) : (
                  <span className="sidebar-icon" style={{ color: provider.color || 'inherit' }}>
                    {provider.icon}
                  </span>
                )}
                <span className="sidebar-label">{provider.name}</span>
                {provider.comingSoon && (
                  <span className="coming-soon-tooltip">Coming Soon</span>
                )}
              </a>
            );
          }

          return (
            <Link
              key={provider.id}
              to={providerHref || '#'}
              className={`sidebar-item ${isActive ? 'active' : ''} ${provider.comingSoon ? 'coming-soon' : ''}`}
              aria-label={`${provider.name}${provider.comingSoon ? ' (coming soon)' : ''}`}
              style={{ '--accent-color': provider.color || '#000' } as React.CSSProperties}
              title={`${provider.name}${provider.comingSoon ? ' (coming soon)' : ''}`}
              onClick={(e) => handleProviderClick(e, provider)}
            >
              {provider.logo ? (
                <img src={provider.logo} alt={provider.name} className="sidebar-logo" />
              ) : (
                <span className="sidebar-icon" style={{ color: provider.color || 'inherit' }}>
                  {provider.icon}
                </span>
              )}
              <span className="sidebar-label">{provider.name}</span>
              {provider.comingSoon && (
                <span className="coming-soon-tooltip">Coming Soon</span>
              )}
            </Link>
          );
        })}
      </nav>

      <div className="main-content">
        <header>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Link to="/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 700 }}>
              Austin Wallace — Data Engineer
            </Link>
            <nav style={{ display: 'flex', gap: '1rem' }}>
              <Link 
                to={getProviderPath('resume')} 
                className={!isEnablement ? 'active-page' : ''}
              >
                Resume
              </Link>
              <Link 
                to={getProviderPath('enablement')} 
                className={isEnablement ? 'active-page' : ''}
              >
                AI Enablement
              </Link>
            </nav>
            {currentProvider && (
              <span className="provider-badge">
                <span style={{ color: currentProvider.color }}>{currentProvider.icon}</span>
                {currentProvider.name} Version
              </span>
            )}
          </div>
        </header>

        <div className="content-area" id="content">
          {children}
        </div>

        <footer>
          <p>Base text written by Austin, enhanced by various AI tooling providers, and deployed with SST.</p>
        </footer>
      </div>
    </div>
  );
}
