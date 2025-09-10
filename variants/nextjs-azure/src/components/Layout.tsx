'use client';
const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

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
  { id: 'claude-code', name: 'Claude Code', icon: '◈', logo: `${BASE}/logos/claude.svg`, color: '#d97706' },
  { id: 'gpt-5-pro', name: 'GPT-5 Pro', icon: '⚡', logo: `${BASE}/logos/chatgpt.svg`, color: '#10a37f' },
  { id: 'gpt-5-thinking', name: 'GPT-5 Thinking', icon: '🧠', logo: `${BASE}/logos/chatgpt.svg`, color: '#10a37f' },
  { id: 'lovable', name: 'Lovable', icon: '♥', logo: `${BASE}/logos/lovable.png`, color: '#ff006e' },
  { id: 'bolt', name: 'Bolt', icon: '⚡', logo: `${BASE}/logos/bolt.jpg`, color: '#f59e0b' },
  { id: 'firebase', name: 'Firebase Studio', icon: '🔥', logo: `${BASE}/logos/firebase.svg`, color: '#039BE5' },
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
  const router = useRouter();
  const currentPath = (router.asPath || '/').split('?')[0];
  const [showDeploymentVariants, setShowDeploymentVariants] = useState(false);
  const [userToggled, setUserToggled] = useState(false);

  const pathNoBase = BASE && currentPath.startsWith(BASE) ? currentPath.slice(BASE.length) : currentPath;
  const isWithRoute = pathNoBase.startsWith('/with/');
  const isEnablement = pathNoBase.includes('/enablement');
  const currentProviderId = isWithRoute ? pathNoBase.split('/')[2] : 'minimal';

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
      ? (currentProviderId === 'minimal' ? '/' : `/with/${currentProviderId}`)
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
                aria-label={`${provider.name}${provider.comingSoon ? ' (coming soon)' : ''}`}
                style={{ '--accent-color': provider.color || '#000' } as React.CSSProperties}
                title={`${provider.name}${provider.comingSoon ? ' (coming soon)' : ''}${provider.isDeployment ? ' (external deployment)' : ''}`}
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
              </a>
            );
          }

          return (
            <Link
              key={provider.id}
              href={providerHref || '#'}
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
            <Link href="/" style={{ textDecoration: 'none', color: 'inherit', fontWeight: 700 }}>
              Austin Wallace — Data Engineer
            </Link>
            <nav style={{ display: 'flex', gap: '1rem' }}>
              <Link 
                href={getProviderPath('resume')} 
                className={!isEnablement ? 'active-page' : ''}
              >
                Resume
              </Link>
              <Link 
                href={getProviderPath('enablement')} 
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

        <div className="content-area" id="content" suppressHydrationWarning>
          {children}
        </div>

        <footer>
          <p>Base text written by Austin, enhanced by various AI tooling providers, and deployed with SST.</p>
        </footer>
      </div>

      <style jsx>{`
        .layout-container {
          display: flex;
          height: 100vh;
          overflow: hidden;
        }
        
        .sidebar {
          width: 80px;
          background: #fafafa;
          border-right: 1px solid #e5e7eb;
          display: flex;
          flex-direction: column;
          padding: 1rem 0;
          gap: 0.5rem;
          overflow-y: auto;
          flex-shrink: 0;
        }

        .variant-toggle {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 0.5rem;
          margin: 0 0.5rem 0.5rem;
          border-radius: 8px;
          background: #fff;
          border: 1px solid #e5e7eb;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .variant-toggle:hover {
          background: #f0f0f0;
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }

        .variant-toggle-icon {
          font-size: 1.2rem;
          margin-bottom: 0.25rem;
        }

        .variant-toggle-label {
          font-size: 0.6rem;
          text-align: center;
          line-height: 1.2;
          white-space: pre-line;
        }

        .sidebar-divider {
          height: 1px;
          background: #e5e7eb;
          margin: 0.5rem 1rem;
        }
        
        :global(.sidebar-item) {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 0.75rem;
          text-decoration: none;
          color: #111827;
          border-radius: 8px;
          margin: 0 0.5rem;
          transition: all 0.2s ease;
          min-height: 60px;
          position: relative;
        }
        
        :global(.sidebar-item:hover) {
          background: #f0f0f0;
          transform: translateX(2px);
        }
        
        :global(.sidebar-item.active) {
          background: #fff;
          box-shadow: 0 2px 8px rgba(0,0,0,0.1);
        }
        
        :global(.sidebar-item.active::before) {
          content: '';
          position: absolute;
          left: -8px;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 24px;
          background: var(--accent-color, #000);
          border-radius: 0 2px 2px 0;
        }
        
        :global(.sidebar-item.coming-soon) {
          opacity: 0.6;
          cursor: not-allowed;
        }
        
        :global(.sidebar-item.coming-soon:hover) {
          opacity: 0.8;
          transform: none;
        }
        
        .sidebar-icon {
          font-size: 1.5rem;
          line-height: 1;
          margin-bottom: 0.25rem;
        }
        
        .sidebar-logo {
          width: 24px;
          height: 24px;
          object-fit: contain;
          margin-bottom: 0.25rem;
        }
        
        .sidebar-label {
          font-size: 0.65rem;
          text-align: center;
          opacity: 0.7;
        }
        
        .main-content {
          flex: 1;
          overflow-y: auto;
          display: flex;
          flex-direction: column;
        }
        
        header {
          padding: 1rem 2rem;
          border-bottom: 1px solid #e5e7eb;
          background: #fff;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .content-area {
          flex: 1;
          max-width: 2000px;
          width: 100%;
          margin: 0 auto;
          padding: 1.25rem;
        }
        
        footer {
          padding: 1rem 2rem;
          border-top: 1px solid #e5e7eb;
          background: #fafafa;
          text-align: center;
          color: #6b7280;
          font-size: 0.85rem;
        }
        
        .provider-badge {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.25rem 0.75rem;
          background: #f0f0f0;
          border-radius: 999px;
          font-size: 0.85rem;
        }
        
        :global(.active-page) {
          font-weight: 600;
          color: #111827;
          text-decoration: underline;
        }

        .coming-soon-tooltip {
          position: absolute;
          bottom: -20px;
          left: 50%;
          transform: translateX(-50%);
          background: rgba(0, 0, 0, 0.8);
          color: white;
          padding: 0.25rem 0.5rem;
          border-radius: 4px;
          font-size: 0.65rem;
          white-space: nowrap;
          opacity: 0;
          transition: opacity 0.2s;
          pointer-events: none;
          z-index: 10;
        }
        
        :global(.sidebar-item.coming-soon:hover .coming-soon-tooltip) {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .sidebar {
            width: 60px;
          }
          
          .sidebar-label {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
