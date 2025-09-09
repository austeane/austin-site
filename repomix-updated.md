This file is a merged representation of a subset of the codebase, containing specifically included files, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of a subset of the repository's contents that is considered the most important context.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.
- Pay special attention to the Repository Description. These contain important context and guidelines specific to this project.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Only files matching these patterns are included: src/routes/**/*.svelte, src/routes/**/*.ts, src/lib/providers.ts, src/lib/components/*.svelte, src/lib/data/*.json, src/app.html, src/hooks.server.ts, variants/nextjs-azure/src/components/Layout.tsx, variants/nextjs-azure/src/pages/*.tsx, variants/nextjs-azure/src/pages/*.js, variants/nextjs-azure/next.config.mjs, variants/react-azure/src/Layout.tsx, variants/react-azure/src/App.tsx, variants/react-azure/staticwebapp.config.json, variants/react-azure/vite.config.ts, variants/tanstack-gcp/src/components/Layout.tsx, variants/tanstack-gcp/src/routes/*.tsx, variants/tanstack-gcp/netlify.toml, variants/tanstack-gcp/vite.config.ts, scripts/deploy-azure-nextjs.sh, scripts/deploy-azure-react.sh, scripts/deploy-tanstack-netlify.sh, scripts/test-routes.sh, static/variants/claude-code/index.html, sst.config.ts, package.json, svelte.config.js, vite.config.ts, README.md, CLAUDE.md, ARCHITECTURE.md, docs/ARCHITECTURE_DETAILED.md
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# User Provided Header
Multi-Framework Resume Platform - Architecture & Implementation

This repomix contains the essential files to understand the multi-cloud deployment architecture:
- Main SvelteKit app with AI variants
- Deployment variants: Next.js/Vercel, React/Azure, TanStack/Netlify
- CloudFront routing via SST
- Shared data endpoints with CORS

Target: ~60k tokens including key source files, configs, and documentation.

# Directory Structure
```
docs/
  ARCHITECTURE_DETAILED.md
scripts/
  deploy-azure-nextjs.sh
  deploy-azure-react.sh
  deploy-tanstack-netlify.sh
  test-routes.sh
src/
  lib/
    components/
      VariantFrame.svelte
    data/
      enablement.json
      resume.json
    providers.ts
  routes/
    data/
      enablement.json/
        +server.ts
      resume.json/
        +server.ts
    enablement/
      +page.svelte
      +page.ts
    robots.txt/
      +server.ts
    with/
      [tool]/
        enablement/
          +page.svelte
          +page.ts
        +page.svelte
        +page.ts
    +layout.svelte
    +layout.ts
    +page.svelte
    +page.ts
  app.html
  hooks.server.ts
static/
  variants/
    claude-code/
      index.html
variants/
  nextjs-azure/
    src/
      components/
        Layout.tsx
      pages/
        _app.tsx
        _document.tsx
        enablement.tsx
        probe.tsx
        resume_ssr.tsx
        resume_static.tsx
        resume.tsx
        test.tsx
    next.config.mjs
  react-azure/
    src/
      App.tsx
      Layout.tsx
    staticwebapp.config.json
    vite.config.ts
  tanstack-gcp/
    src/
      components/
        Layout.tsx
      routes/
        __root.tsx
        enablement.tsx
        index.tsx
        resume.tsx
        with.$tool.enablement.tsx
        with.$tool.tsx
        with.index.tsx
    netlify.toml
    vite.config.ts
ARCHITECTURE.md
CLAUDE.md
package.json
README.md
sst.config.ts
svelte.config.js
vite.config.ts
```

# Files

## File: docs/ARCHITECTURE_DETAILED.md
````markdown
# Detailed Architecture Documentation

## Overview
This is a multi-framework resume platform that demonstrates the same content styled by different AI tools and deployed across multiple cloud providers. The architecture showcases modern web development practices with SST (Serverless Stack), CloudFront CDN, and multiple framework deployments.

## Core Architecture

### 1. Main Application (SvelteKit)
- **Framework**: SvelteKit with SSR/SSG hybrid rendering
- **Deployment**: AWS via SST with CloudFront CDN
- **URL**: https://d2li8p8xclq49l.cloudfront.net/
- **Features**:
  - Server-side rendering for SEO
  - Static prerendering for performance
  - API routes for JSON data endpoints
  - Dynamic variant loading via iframes

### 2. Deployment Variants
Each deployment variant is a separate application deployed to different cloud providers:

#### Next.js on Vercel
- **Base Path**: `/azure/next`
- **Framework**: Next.js 14 with App Router
- **Deployment**: Vercel (configured for Azure App Service compatibility)
- **Features**: SSG with basePath configuration

#### React on Azure Static Web Apps
- **Base Path**: `/azure/react`
- **Framework**: React with React Router
- **Deployment**: Azure Static Web Apps
- **Features**: SPA with client-side routing, path rewriting via staticwebapp.config.json

#### TanStack on Netlify
- **Base Path**: `/gcp/tanstack`
- **Framework**: TanStack Router with Vite
- **Deployment**: Netlify
- **Features**: File-based routing, SPA with redirects

## Routing Architecture

### SST Router Configuration
The SST Router acts as the main entry point, routing traffic to different origins based on path prefixes:

```typescript
router.route("/azure/next", AZURE_NEXT_ORIGIN);
router.route("/azure/react", AZURE_REACT_ORIGIN, {
  rewrite: { regex: "^/azure/react/(.*)$", to: "/$1" }
});
router.route("/gcp/tanstack", GCP_TANSTACK_ORIGIN);
```

### Path Handling
Each deployment variant handles paths differently:

1. **Next.js**: Uses `basePath` in next.config.mjs
2. **React**: Uses path rewriting in staticwebapp.config.json
3. **TanStack**: Uses Vite base configuration and Netlify redirects
4. **SvelteKit**: Native routing at root

## Variant System

### AI Variants
Static HTML files showcasing different AI tool styling:
- Minimal (canonical)
- Claude Code
- GPT-5 Pro
- GPT-5 Thinking
- Lovable
- Bolt
- Firebase Studio

### Deployment Variants
Full framework deployments with complete UI:
- SvelteKit (AWS)
- Next.js (Vercel)
- React (Azure)
- TanStack (Netlify)

### Variant Loading
1. **Static Variants**: Loaded via iframe from `/variants/[tool]/index.html`
2. **Deployment Variants**: External URLs with deep-linking support
3. **Data Fetching**: All variants fetch from centralized JSON endpoints

## Data Architecture

### Centralized Data Layer
- **Location**: `/src/lib/data/`
- **Endpoints**: 
  - `/data/resume.json` - Resume content
  - `/data/enablement.json` - AI enablement content
- **CORS**: Not required when accessed through the CloudFront Router (same-origin). For direct provider domains or local dev, use small rewrites/proxies.

### Data Flow
1. Main app serves JSON via API routes
2. Variants fetch data on load
3. Render using framework-specific components
4. Optional PostMessage for height communication

## Navigation System

### Smart Sidebar
- Toggles between AI and Deployment variants
- Preserves variant selection across navigation
- Opens deployment variants in new tabs
- Shows active state with visual indicators

### Route Detection
Each framework detects the current variant from URL:
- Handles both development and production paths
- Accounts for base path prefixes
- Updates UI accordingly

## Build and Deployment Pipeline

### Build Process
1. **Development**: `npm run dev` for local development
2. **Build**: Framework-specific build commands
3. **Validation**: `npm run validate:variants`
4. **Deployment**: Provider-specific deployment scripts

### Deployment Scripts
- `deploy-azure-react.sh` - Deploys React to Azure Static Web Apps
- `deploy-gcp-tanstack.sh` - Deploys TanStack to Netlify
- `deploy-azure-nextjs.sh` - Deploys Next.js to Vercel
- `sync-variants.sh` - Syncs static variants to all deployments

### CI/CD
- SST handles AWS deployments
- Provider CLIs for other deployments
- CloudFront invalidation on updates

## Security and Performance

### Security
- Rewrites/proxies for data endpoints in dev/direct domains
- Iframe sandboxing for variants
- Security headers via providers
- No exposed secrets or credentials

### Performance
- CloudFront CDN for global distribution
- Static asset optimization
- Code splitting and lazy loading
- Prerendering where possible
- Compression and minification

## Gotchas

### Avoid forwarding Router → SvelteKit distribution URL
Do not route traffic from the Router to the SvelteKit app’s internal CloudFront distribution (e.g., `"/*": site.url`). CloudFront→CloudFront forwarding can produce 403s. Mount the SvelteKit app on the Router instead by passing the Router instance to the SvelteKit construct. Deep links then work reliably. `/with/*` host pages are SSR-only to guarantee clean URLs.

### Cross-Origin Restrictions
- Some variants may have CORS limitations
- Iframe height communication requires same-origin or PostMessage
- External deployments open in new tabs

## Development Workflow

### Local Development
1. Run `npm run dev` in main project
2. Run framework-specific dev servers for variants
3. Use `npm run validate:variants` to check HTML variants
4. Test with different AI tools

### Adding New Variants
1. Create HTML in `/static/variants/[tool-name]/`
2. Add provider entry to `src/lib/providers.ts`
3. Style using AI tool of choice
4. Validate and test locally
5. Deploy and verify

### Debugging
- Check browser console for errors
- Verify CORS headers on data endpoints
- Test iframe communication
- Check CloudFront logs for routing issues
- Verify provider-specific configurations

## Future Improvements

### Planned Features
- Fix SST SSR routing for direct URL access
- Add more AI tool variants
- Implement variant comparison view
- Add performance metrics dashboard
- Enhance mobile responsiveness

### Technical Debt
- Consolidate deployment scripts
- Improve error handling
- Add comprehensive testing
- Optimize bundle sizes
- Implement proper logging

## Conclusion
This architecture demonstrates a sophisticated multi-framework deployment strategy with centralized data management, intelligent routing, and seamless user experience across different cloud providers. By mounting SvelteKit on the Router (and avoiding Router → site.url forwarding), deep links work reliably; `/with/*` host pages are SSR-only for robustness and clean URLs.
````

## File: variants/nextjs-azure/src/components/Layout.tsx
````typescript
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
    externalUrl: 'https://d2li8p8xclq49l.cloudfront.net',
    icon: '🚀', 
    color: '#ff3e00'
  },
  { 
    id: 'nextjs-vercel', 
    name: 'Next.js (Vercel)', 
    isDeployment: true,
    externalUrl: 'https://d2li8p8xclq49l.cloudfront.net/azure/next',
    icon: '▲', 
    color: '#000'
  },
  { 
    id: 'react-azure', 
    name: 'React (Azure)', 
    isDeployment: true,
    externalUrl: 'https://d2li8p8xclq49l.cloudfront.net/azure/react',
    icon: '⚛️', 
    color: '#0078d4'
  },
  { 
    id: 'tanstack-netlify', 
    name: 'TanStack (Netlify)', 
    isDeployment: true,
    externalUrl: 'https://d2li8p8xclq49l.cloudfront.net/gcp/tanstack',
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
          title="Switch between AI-styled and deployment variants"
        >
          <span className="variant-toggle-icon">
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
              href={providerHref || '#'}
              className={`sidebar-item ${isActive ? 'active' : ''} ${provider.comingSoon ? 'coming-soon' : ''}`}
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
````

## File: variants/nextjs-azure/src/pages/_app.tsx
````typescript
import React from 'react';
import type { AppProps } from 'next/app';
import Layout from '@/components/Layout';
import '@/styles/globals.css';

class ErrorBoundary extends React.Component<{ children: React.ReactNode }, { hasError: boolean; error?: any }>{
  constructor(props: any) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: any) {
    return { hasError: true, error };
  }
  componentDidCatch(error: any, info: any) {
    // Log detailed error to console to aid debugging
    // eslint-disable-next-line no-console
    console.error('App ErrorBoundary caught:', error, info);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem' }}>
          <h2>Client error</h2>
          <pre style={{ whiteSpace: 'pre-wrap' }}>{String(this.state.error)}</pre>
        </div>
      );
    }
    return this.props.children as any;
  }
}

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ErrorBoundary>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ErrorBoundary>
  );
}
````

## File: variants/nextjs-azure/src/pages/_document.tsx
````typescript
import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link
            rel="icon"
            href={`${process.env.NEXT_PUBLIC_BASE_PATH || ''}/logos/claude.svg`}
            type="image/svg+xml"
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
````

## File: variants/nextjs-azure/src/pages/enablement.tsx
````typescript
export default function EnablementPage() {
  return (
    <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>AI Enablement</h1>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        This deployment focuses on variant hosting. View the canonical enablement content on AWS/SST:
        {' '}<a href="https://d2li8p8xclq49l.cloudfront.net/enablement" target="_blank" rel="noopener noreferrer">Enablement on AWS</a>.
      </p>
    </div>
  );
}
````

## File: variants/nextjs-azure/src/pages/probe.tsx
````typescript
import { useEffect } from 'react';
import type { GetServerSideProps } from 'next';

type FP = Record<string, any>;

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const req: any = ctx.req;
  (ctx.res as any)?.setHeader?.('X-Robots-Tag', 'noindex');
  const fp: FP = {
    server_host: req.headers['host'],
    server_proto: (req.headers['x-forwarded-proto'] as string) || 'https',
    server_url: req.url,
    resolved_url: ctx.resolvedUrl,
    node_env: process.env.NODE_ENV,
    base_path: process.env.NEXT_PUBLIC_BASE_PATH || '',
    data_origin: process.env.NEXT_DATA_ORIGIN || '',
  };
  return { props: { __server: fp } };
};

export default function Probe({ __server }: { __server: FP }) {
  useEffect(() => {
    const client: FP = {
      client_host: window.location.host,
      client_proto: window.location.protocol.replace(':',''),
      client_pathname: window.location.pathname,
      client_href: window.location.href,
      base_path: process.env.NEXT_PUBLIC_BASE_PATH || '',
    };
    const diffs: Array<[string, any, any]> = [];
    const keys = new Set([...Object.keys(__server||{}), ...Object.keys(client)]);
    for (const k of keys) {
      const s = (__server as any)[k];
      const c = (client as any)[k];
      if (s !== undefined && c !== undefined && String(s) !== String(c)) {
        diffs.push([k, s, c]);
      }
    }
    if (diffs.length) {
      // eslint-disable-next-line no-console
      console.group('%cHydration fingerprint diffs','color:#e11d48;font-weight:bold');
      diffs.forEach(([k,s,c]) => console.warn(k, { server: s, client: c }));
      console.groupEnd();
    } else {
      // eslint-disable-next-line no-console
      console.info('%cHydration fingerprint: no diffs','color:#10b981');
    }
  }, [__server]);

  return (
    <main style={{ padding: 16 }}>
      <h1>Probe</h1>
      <p>Open console to see server vs client fingerprint.</p>
      <pre style={{ display: 'none' }} id="__server_fp" dangerouslySetInnerHTML={{ __html: JSON.stringify(__server) }} />
    </main>
  );
}
````

## File: variants/nextjs-azure/src/pages/resume_ssr.tsx
````typescript
import { useMemo } from 'react';

type Resume = {
  basics: {
    name: string;
    label: string;
    website?: string;
    email?: string;
    location?: { city?: string };
    profiles?: { network: string; url: string }[];
    summary?: string;
  };
  work: { name: string; position: string; startDate?: string; endDate?: string; summary?: string; highlights?: string[] }[];
  projects?: { name: string; description?: string; url?: string; keywords?: string[] }[];
  skills?: { name: string; keywords?: string[] }[];
};

export async function getServerSideProps() {
  const origin = process.env.NEXT_DATA_ORIGIN || 'https://d2li8p8xclq49l.cloudfront.net';
  const res = await fetch(`${origin}/data/resume.json`, {
    headers: { Accept: 'application/json' },
  });
  if (!res.ok) {
    return { props: { error: `HTTP ${res.status}` } };
  }
  const data = await res.json();
  return { props: { data } };
}

export default function ResumeSSR({ data, error }: { data?: Resume; error?: string }) {
  // Always call hooks at the top level, before any conditional returns
  const contacts = useMemo(() => {
    if (!data?.basics) return [];
    const items: { label: string; url: string | null }[] = [];
    const { basics } = data;
    if (basics?.website) items.push({ label: 'Website', url: basics.website });
    if (basics?.email) items.push({ label: basics.email, url: `mailto:${basics.email}` });
    if (basics?.location?.city) items.push({ label: basics.location.city, url: null });
    const gh = basics?.profiles?.find((p) => p.network?.toLowerCase() === 'github');
    const li = basics?.profiles?.find((p) => p.network?.toLowerCase() === 'linkedin');
    if (gh) items.push({ label: 'GitHub', url: gh.url });
    if (li) items.push({ label: 'LinkedIn', url: li.url });
    return items;
  }, [data?.basics]);

  if (error) return <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}><p>Failed to load resume: {error}</p></div>;
  if (!data) return <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}><p>Loading</p></div>;

  const { basics, work = [], projects = [], skills = [] } = data;

  return (
    <div style={{ padding: '1.25rem', maxWidth: 2000, margin: '0 auto' }}>
      <section aria-labelledby="title">
        <h1 id="title" style={{ fontSize: '2rem', lineHeight: 1.1, margin: '.25rem 0 .5rem 0' }}>
          {basics?.name || 'Your Name'}
        </h1>
        <p style={{ margin: 0, color: '#666' }}>{basics?.label || 'AI Engineer · AI Enablement Specialist'}</p>
        {!!contacts.length && (
          <ul style={{ listStyle: 'none', padding: 0, margin: '.75rem 0 0 0', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {contacts.map((c, i) => (
              <li key={i}>
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noopener noreferrer">{c.label}</a>
                ) : (
                  <span>{c.label}</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      <hr style={{ margin: '1.25rem 0', border: 0, borderTop: '1px solid #eee' }} />

      {basics?.summary && (
        <section aria-labelledby="summary">
          <h2 id="summary" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.5rem' }}>Summary</h2>
          <p style={{ margin: 0, maxWidth: '70ch' }}>{basics.summary}</p>
        </section>
      )}

      {basics?.summary && (<hr style={{ margin: '1.25rem 0', border: 0, borderTop: '1px solid #eee' }} />)}

      {!!work.length && (
        <section aria-labelledby="work">
          <h2 id="work" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.5rem' }}>Experience</h2>
          {work.map((job, i) => (
            <article key={i} style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <div>
                  <strong>{job.position}</strong>{' @ '}{job.name}
                </div>
                <div style={{ color: '#666' }}>
                  {job.startDate}{job.endDate ? ` – ${job.endDate}` : ' – Present'}
                </div>
              </div>
              {job.summary && <p style={{ margin: '.25rem 0 0 0', maxWidth: '70ch' }}>{job.summary}</p>}
              {!!job.highlights?.length && (
                <ul style={{ margin: '.25rem 0 0 1rem' }}>
                  {job.highlights.map((h, j) => (<li key={j}>{h}</li>))}
                </ul>
              )}
            </article>
          ))}
        </section>
      )}

      {!!work.length && (<hr style={{ margin: '1.25rem 0', border: 0, borderTop: '1px solid #eee' }} />)}

      {!!projects.length && (
        <section aria-labelledby="projects">
          <h2 id="projects" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.5rem' }}>Projects</h2>
          <ul style={{ listStyle: 'disc', margin: '.25rem 0 0 1rem' }}>
            {projects.map((p, i) => (
              <li key={i}>
                <strong>{p.name}</strong>
                {p.url && (
                  <>
                    {' '}— <a href={p.url} target="_blank" rel="noopener noreferrer">{p.url}</a>
                  </>
                )}
                {p.description && (<div style={{ margin: '.25rem 0 0 0', maxWidth: '70ch' }}>{p.description}</div>)}
                {!!p.keywords?.length && (
                  <div style={{ color: '#666', fontSize: '.9rem', marginTop: '.25rem' }}>{p.keywords.join(' · ')}</div>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {!!projects.length && (<hr style={{ margin: '1.25rem 0', border: 0, borderTop: '1px solid #eee' }} />)}

      {!!skills.length && (
        <section aria-labelledby="skills">
          <h2 id="skills" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.5rem' }}>Skills</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
            {skills.map((s, i) => (
              <li key={i} style={{ border: '1px solid #eee', padding: '.25rem .5rem', borderRadius: '999px' }}>
                {s.name}{s.keywords?.length ? ` — ${s.keywords.join(', ')}` : ''}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
````

## File: variants/nextjs-azure/src/pages/resume_static.tsx
````typescript
export default function ResumeStatic() {
  return (
    <div style={{ padding: 16 }}>
      <h1>Static Resume Page</h1>
      <p>No client logic. If this hydrates, the mismatch is inside the dynamic resume client.</p>
    </div>
  );
}
````

## File: variants/nextjs-azure/src/pages/resume.tsx
````typescript
export { default } from './resume_ssr';
export { getServerSideProps } from './resume_ssr';
````

## File: variants/nextjs-azure/src/pages/test.tsx
````typescript
import Head from 'next/head';

export async function getServerSideProps({ res }: any) {
  res.setHeader('X-Robots-Tag', 'noindex');
  return { props: {} };
}

export default function TestPage() {
  return (
    <>
      <Head>
        <meta name="robots" content="noindex, nofollow" />
      </Head>
      <div style={{ padding: 16 }}>
        <h1>Hydration Test</h1>
        <p>If you see this without an error, hydration is fine.</p>
      </div>
    </>
  );
}
````

## File: variants/react-azure/src/Layout.tsx
````typescript
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
    externalUrl: 'https://d2li8p8xclq49l.cloudfront.net',
    icon: '🚀', 
    color: '#ff3e00'
  },
  { 
    id: 'nextjs-vercel', 
    name: 'Next.js (Vercel)', 
    isDeployment: true,
    externalUrl: 'https://d2li8p8xclq49l.cloudfront.net/azure/next',
    icon: '▲', 
    color: '#000'
  },
  { 
    id: 'react-azure', 
    name: 'React (Azure)', 
    isDeployment: true,
    externalUrl: 'https://d2li8p8xclq49l.cloudfront.net/azure/react',
    icon: '⚛️', 
    color: '#0078d4'
  },
  { 
    id: 'tanstack-netlify', 
    name: 'TanStack (Netlify)', 
    isDeployment: true,
    externalUrl: 'https://d2li8p8xclq49l.cloudfront.net/gcp/tanstack',
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
          title="Switch between AI-styled and deployment variants"
        >
          <span className="variant-toggle-icon">
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
````

## File: variants/tanstack-gcp/src/components/Layout.tsx
````typescript
import { useState, useEffect } from 'react';
import { Link, useLocation } from '@tanstack/react-router';

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
    externalUrl: 'https://d2li8p8xclq49l.cloudfront.net',
    icon: '🚀', 
    color: '#ff3e00'
  },
  { 
    id: 'nextjs-vercel', 
    name: 'Next.js (Vercel)', 
    isDeployment: true,
    externalUrl: 'https://d2li8p8xclq49l.cloudfront.net/azure/next',
    icon: '▲', 
    color: '#000'
  },
  { 
    id: 'react-azure', 
    name: 'React (Azure)', 
    isDeployment: true,
    externalUrl: 'https://d2li8p8xclq49l.cloudfront.net/azure/react',
    icon: '⚛️', 
    color: '#0078d4'
  },
  { 
    id: 'tanstack-netlify', 
    name: 'TanStack (Netlify)', 
    isDeployment: true,
    externalUrl: 'https://d2li8p8xclq49l.cloudfront.net/gcp/tanstack',
    icon: '🔷', 
    color: '#00C7B7'
  },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [showDeploymentVariants, setShowDeploymentVariants] = useState(false);
  const [userToggled, setUserToggled] = useState(false);

  const pathname = location.pathname;
  // Handle both local dev (/with/) and production (/gcp/tanstack/with/) paths
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
          title="Switch between AI-styled and deployment variants"
        >
          <span className="variant-toggle-icon">
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
````

## File: variants/tanstack-gcp/src/routes/enablement.tsx
````typescript
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/enablement')({
  component: EnablementHome,
});

function EnablementHome() {
  return (
    <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>AI Enablement</h1>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        This deployment focuses on variant hosting. View the canonical enablement content on AWS/SST:
        {' '}<a href="https://d2li8p8xclq49l.cloudfront.net/enablement" target="_blank" rel="noopener noreferrer">Enablement on AWS</a>.
      </p>
    </div>
  );
}
````

## File: variants/tanstack-gcp/src/routes/resume.tsx
````typescript
import { createFileRoute } from '@tanstack/react-router';
import { useEffect, useMemo, useState } from 'react';

export const Route = createFileRoute('/resume')({
  component: MinimalResume,
});

type Resume = {
  basics: {
    name: string;
    label: string;
    website?: string;
    email?: string;
    location?: { city?: string };
    profiles?: { network: string; url: string }[];
    summary?: string;
  };
  work: { name: string; position: string; startDate?: string; endDate?: string; summary?: string; highlights?: string[] }[];
  projects?: { name: string; description?: string; url?: string; keywords?: string[] }[];
  skills?: { name: string; keywords?: string[] }[];
};

function MinimalResume() {
  const [data, setData] = useState<Resume | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const url = (import.meta as any).env?.VITE_DATA_URL || '/data/resume.json';
    fetch(url, { headers: { Accept: 'application/json' } })
      .then((r) => {
        if (!r.ok) throw new Error(`HTTP ${r.status}`);
        return r.json();
      })
      .then(setData)
      .catch((e) => setErr(e.message));
  }, []);

  const basics = data?.basics;
  const work = data?.work ?? [];
  const projects = data?.projects ?? [];
  const skills = data?.skills ?? [];
  const contacts = useMemo(() => {
    const items: { label: string; url: string | null }[] = [];
    if (basics?.website) items.push({ label: 'Website', url: basics.website });
    if (basics?.email) items.push({ label: basics.email, url: `mailto:${basics.email}` });
    if (basics?.location?.city) items.push({ label: basics.location.city, url: null });
    const gh = basics?.profiles?.find((p) => p.network?.toLowerCase() === 'github');
    const li = basics?.profiles?.find((p) => p.network?.toLowerCase() === 'linkedin');
    if (gh) items.push({ label: 'GitHub', url: gh.url });
    if (li) items.push({ label: 'LinkedIn', url: li.url });
    return items;
  }, [basics]);

  if (err) {
    return <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}><p>Failed to load resume: {err}</p></div>;
  }
  if (!data) return <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}><p>Loading…</p></div>;

  return (
    <div style={{ padding: '1.25rem', maxWidth: 2000, margin: '0 auto' }}>
      <section aria-labelledby="title">
        <h1 id="title" style={{ fontSize: '2rem', lineHeight: 1.1, margin: '.25rem 0 .5rem 0' }}>
          {basics?.name || 'Your Name'}
        </h1>
        <p style={{ margin: 0, color: '#666' }}>{basics?.label || 'AI Engineer · AI Enablement Specialist'}</p>
        {!!contacts.length && (
          <ul style={{ listStyle: 'none', padding: 0, margin: '.75rem 0 0 0', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {contacts.map((c, i) => (
              <li key={i}>
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noopener noreferrer">{c.label}</a>
                ) : (
                  <span>{c.label}</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      <hr style={{ margin: '1.25rem 0', border: 0, borderTop: '1px solid #eee' }} />

      {basics?.summary && (
        <section aria-labelledby="summary">
          <h2 id="summary" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.5rem' }}>Summary</h2>
          <p style={{ margin: 0, maxWidth: '70ch' }}>{basics.summary}</p>
        </section>
      )}

      {basics?.summary && (<hr style={{ margin: '1.25rem 0', border: 0, borderTop: '1px solid #eee' }} />)}

      {!!work.length && (
        <section aria-labelledby="work">
          <h2 id="work" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.5rem' }}>Experience</h2>
          {work.map((job, i) => (
            <article key={i} style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <div>
                  <strong>{job.position}</strong>{' @ '}{job.name}
                </div>
                <div style={{ color: '#666' }}>
                  {job.startDate}{job.endDate ? ` – ${job.endDate}` : ' – Present'}
                </div>
              </div>
              {job.summary && <p style={{ margin: '.25rem 0 0 0', maxWidth: '70ch' }}>{job.summary}</p>}
              {!!job.highlights?.length && (
                <ul style={{ margin: '.25rem 0 0 1rem' }}>
                  {job.highlights.map((h, j) => (<li key={j}>{h}</li>))}
                </ul>
              )}
            </article>
          ))}
        </section>
      )}

      {!!work.length && (<hr style={{ margin: '1.25rem 0', border: 0, borderTop: '1px solid #eee' }} />)}

      {!!projects.length && (
        <section aria-labelledby="projects">
          <h2 id="projects" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.5rem' }}>Projects</h2>
          <ul style={{ listStyle: 'disc', margin: '.25rem 0 0 1rem' }}>
            {projects.map((p, i) => (
              <li key={i}>
                <strong>{p.name}</strong>
                {p.url && (
                  <>
                    {' '}— <a href={p.url} target="_blank" rel="noopener noreferrer">{p.url}</a>
                  </>
                )}
                {p.description && (<div style={{ margin: '.25rem 0 0 0', maxWidth: '70ch' }}>{p.description}</div>)}
                {!!p.keywords?.length && (
                  <div style={{ color: '#666', fontSize: '.9rem', marginTop: '.25rem' }}>{p.keywords.join(' · ')}</div>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {!!projects.length && (<hr style={{ margin: '1.25rem 0', border: 0, borderTop: '1px solid #eee' }} />)}

      {!!skills.length && (
        <section aria-labelledby="skills">
          <h2 id="skills" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.5rem' }}>Skills</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
            {skills.map((s, i) => (
              <li key={i} style={{ border: '1px solid #eee', padding: '.25rem .5rem', borderRadius: '999px' }}>
                {s.name}{s.keywords?.length ? ` — ${s.keywords.join(', ')}` : ''}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
````

## File: variants/tanstack-gcp/src/routes/with.$tool.enablement.tsx
````typescript
import { createFileRoute, useParams } from '@tanstack/react-router';

export const Route = createFileRoute('/with/$tool/enablement')({
  component: VariantEnablement,
});

function VariantEnablement() {
  const { tool } = useParams({ from: '/with/$tool/enablement' });
  const src = `/gcp/tanstack/variants/${tool}/enablement/index.html`;
  return (
    <div style={{ height: "100%", display: "flex" }}>
      <iframe
        title={`AI Enablement - ${tool}`}
        src={src}
        style={{ width: "100%", height: "100%", border: "0", background: "#fff" }}
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
}
````

## File: variants/tanstack-gcp/src/routes/with.$tool.tsx
````typescript
import { createFileRoute, useParams } from '@tanstack/react-router';

export const Route = createFileRoute('/with/$tool')({
  component: VariantView,
});

function VariantView() {
  const { tool } = useParams({ from: '/with/$tool' });
  const src = `/gcp/tanstack/variants/${tool}/index.html`;
  return (
    <div style={{ height: "100%", display: "flex" }}>
      <iframe
        title={`AI Variant: ${tool}`}
        src={src}
        style={{ width: "100%", height: "100%", border: "0", background: "#fff" }}
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
}
````

## File: variants/tanstack-gcp/src/routes/with.index.tsx
````typescript
import { createFileRoute, Link } from '@tanstack/react-router';

const variants = [
  { id: "claude-code", name: "Claude Code" },
  { id: "gpt-5-pro", name: "GPT-5 Pro" },
  { id: "gpt-5-thinking", name: "GPT-5 Thinking" },
  { id: "lovable", name: "Lovable" },
  { id: "bolt", name: "Bolt" },
  { id: "firebase", name: "Firebase Studio" },
];

export const Route = createFileRoute('/with/')({
  component: () => (
    <main style={{ maxWidth: 960, margin: "2rem auto", padding: "0 1rem" }}>
      <h1>AI Variants on TanStack</h1>
      <p>Served from <code>/gcp/tanstack/variants/&lt;tool&gt;/index.html</code>.</p>
      <ul>
        {variants.map(v => (
          <li key={v.id}><Link to="/with/$tool" params={{ tool: v.id }}>{v.name}</Link></li>
        ))}
      </ul>
    </main>
  ),
});
````

## File: scripts/deploy-azure-nextjs.sh
````bash
#!/bin/bash

# Deploy Next.js to Azure App Service
set -e

echo "==================================="
echo "Deploying Next.js to Azure App Service"
echo "==================================="

# Ensure six AI variants are copied into this app
echo "Syncing AI variants into Next.js public/variants..."
./scripts/sync-variants.sh

APP_NAME="austin-resume-next"
RESOURCE_GROUP="austin-resume-rg"

cd variants/nextjs-azure

# Ensure dependencies are installed before building
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

echo "Building Next.js app..."
npm run build

echo "Creating deployment package..."
# Create a zip with the standalone build
zip -r deploy.zip \
    .next/standalone/* \
    .next/static \
    public \
    package.json \
    package-lock.json \
    -x "*.git*" \
    -x "node_modules/*" \
    -x ".env*"

echo "Deploying to Azure..."
az webapp deployment source config-zip \
    --resource-group $RESOURCE_GROUP \
    --name $APP_NAME \
    --src deploy.zip

echo "Cleaning up..."
rm deploy.zip

echo ""
echo "Deployment complete!"
echo "View at: https://$APP_NAME.azurewebsites.net"
echo "Note: It may take a minute for the app to start."
````

## File: scripts/deploy-tanstack-netlify.sh
````bash
#!/bin/bash

# Deploy TanStack to Netlify
set -e

echo "==================================="
echo "Deploying TanStack to Netlify"
echo "==================================="
echo ""

# Ensure six AI variants are copied into this app
echo "Syncing AI variants into TanStack public/variants..."
./scripts/sync-variants.sh

cd variants/tanstack-gcp

# Ensure dependencies are installed for reproducible builds
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "Installing Netlify CLI..."
    npm install -g netlify-cli
fi

# Build the project
echo "Building TanStack app..."
npm run build

# Ensure redirects are included in the published folder (works with CLI deploys)
echo "Creating Netlify _redirects in dist..."
cat > dist/_redirects << 'EOF'
# Canonical root redirect to /resume
/gcp/tanstack            /gcp/tanstack/resume   308!
# Asset passthroughs
/gcp/tanstack/assets/*   /assets/:splat         200
/gcp/tanstack/variants/* /variants/:splat       200
# SPA fallback
/gcp/tanstack/*          /index.html            200
EOF

# (Optional) also include security headers
printf "/*\n  X-Frame-Options: SAMEORIGIN\n  X-Content-Type-Options: nosniff\n  X-XSS-Protection: 1; mode=block\n" > dist/_headers

# Deploy to Netlify
echo "Deploying to Netlify..."
echo ""
echo "First, make sure you're logged in:"
netlify login
echo ""
echo "Now deploying..."
echo "If this is your first deployment:"
echo "- Choose 'Create & configure a new site'"
echo "- Team: Select your team"
echo "- Site name: austin-resume-tanstack (or leave blank)"
echo ""

netlify deploy --prod --dir=dist

echo ""
echo "==================================="
echo "Deployment Complete!"
echo "==================================="
echo ""
echo "Your TanStack app is now live on Netlify!"
echo "URL will be shown above (e.g., https://austin-resume-tanstack.netlify.app)"
echo ""
echo "Save this URL for SST config!"
````

## File: scripts/test-routes.sh
````bash
#!/bin/bash

# SST Router Smoke Test Script
# Tests all routes through the CloudFront distribution
# Usage: ./scripts/test-routes.sh [router-domain]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get router domain from argument or use default
ROUTER_DOMAIN=${1:-"https://d2li8p8xclq49l.cloudfront.net"}

echo "🔍 Testing SST Router Routes"
echo "================================"
echo "Router Domain: $ROUTER_DOMAIN"
echo "================================"
echo ""

# Function to test a route
test_route() {
    local path=$1
    local description=$2
    local expected_status=${3:-200}
    
    printf "Testing %-30s" "$path"
    
    # Get HTTP status code (with -L to follow redirects)
    status=$(curl -sL -o /dev/null -w "%{http_code}" "$ROUTER_DOMAIN$path")
    
    if [ "$status" = "$expected_status" ]; then
        echo -e " ${GREEN}✅ $status OK${NC} - $description"
        return 0
    else
        echo -e " ${RED}❌ $status${NC} - Expected $expected_status - $description"
        return 1
    fi
}

# Function to test with headers
test_route_headers() {
    local path=$1
    local description=$2
    
    printf "Testing %-30s" "$path (headers)"
    
    # Get response headers using GET instead of HEAD for accurate CORS headers
    headers=$(curl -sL -D - -o /dev/null "$ROUTER_DOMAIN$path")
    
    # Check for CORS header
    if echo "$headers" | grep -qi "access-control-allow-origin"; then
        echo -e " ${GREEN}✅ CORS${NC} - $description"
        return 0
    else
        echo -e " ${YELLOW}⚠️  No CORS${NC} - $description"
        return 1
    fi
}

# Counter for failures
failures=0

echo "🏠 Main Routes"
echo "-------------"
test_route "/" "SvelteKit homepage" || ((failures++))
test_route "/enablement" "SvelteKit enablement page" || ((failures++))

echo ""
echo "📊 Data Routes"
echo "-------------"
test_route "/data/resume.json" "Shared resume data" || ((failures++))
test_route_headers "/data/resume.json" "CORS headers present" || ((failures++))

echo ""
echo "🎨 Framework Variants"
echo "--------------------"
test_route "/azure/next" "Next.js on Vercel" || ((failures++))

# Discover actual Next.js asset from HTML (using extended regex)
next_asset=$(curl -sL "$ROUTER_DOMAIN/azure/next" | grep -oE '/azure/next/_next/[^"]+\.(js|css)' | head -n1)
if [ -n "$next_asset" ]; then
    ct=$(curl -sLI "$ROUTER_DOMAIN$next_asset" | tr -d '\r' | awk -F': ' '/[Cc]ontent-[Tt]ype/{print $2}' | head -n1)
    if echo "$ct" | grep -qiE 'javascript|css|font|image'; then
        echo -e " ${GREEN}✅ Next.js asset OK${NC} (content-type: $ct)"
    else
        echo -e " ${RED}❌ Next.js asset wrong type${NC} (got: $ct for $next_asset)"
        ((failures++))
    fi
else
    echo -e " ${YELLOW}⚠️  Could not find Next.js asset${NC}"
    ((failures++))
fi

test_route "/azure/react" "React on Azure" || ((failures++))
test_route "/gcp/tanstack" "TanStack on Netlify" || ((failures++))

echo ""
echo "🧩 AI Variants present under each deployment"
echo "-------------------------------------------"
test_route "/azure/next/variants/claude-code/index.html" "Next hosts AI variants" || ((failures++))
test_route "/azure/react/variants/claude-code/index.html" "React hosts AI variants" || ((failures++))
test_route "/gcp/tanstack/variants/claude-code/index.html" "TanStack hosts AI variants" || ((failures++))

echo ""
echo "🧪 Asset MIME checks"
echo "--------------------"
asset_mime_check() {
  local page="$1"
  local label="$2"
  local css=$(curl -sL "$ROUTER_DOMAIN$page" | grep -o "$page/assets/[^\"']\+\.css" | head -n1)
  if [ -z "$css" ]; then
    echo -e " ${YELLOW}⚠️  No CSS discovered on $label${NC}"
    return 1
  fi
  local ct=$(curl -sLI "$ROUTER_DOMAIN$css" | tr -d '\r' | awk -F': ' '/[Cc]ontent-[Tt]ype/{print $2}')
  if echo "$ct" | grep -qi 'text/css'; then
    echo -e " ${GREEN}✅ $label CSS content-type OK ($ct)${NC}"
    return 0
  else
    echo -e " ${RED}❌ $label CSS wrong content-type ($ct)${NC}"
    return 1
  fi
}
asset_mime_check "/azure/react" "React (Azure)" || ((failures++))
asset_mime_check "/gcp/tanstack" "TanStack (Netlify)" || ((failures++))

echo ""
echo "================================"
if [ $failures -eq 0 ]; then
    echo -e "${GREEN}✅ All tests passed!${NC}"
else
    echo -e "${RED}❌ $failures test(s) failed${NC}"
    echo ""
    echo "Common issues to check:"
    echo "1. Ensure all framework apps are deployed to their origins"
    echo "2. Check that origins are publicly accessible (no auth)"
    echo "3. Verify SST deployment completed successfully"
    echo "4. Confirm CloudFront distribution has propagated (~5-10 mins)"
fi
echo "================================"

# Return non-zero if any tests failed
exit $failures
````

## File: src/lib/data/enablement.json
````json
{
  "hero": {
    "title": "AI Code Generation Enablement",
    "subtitle": "Transform your development workflow with AI-powered coding assistants",
    "primary_cta": {
      "label": "Schedule Discovery",
      "href": "mailto:austin.wallace@hotmail.com?subject=AI%20Code%20Generation%20Discovery"
    },
    "secondary_cta": {
      "label": "View Resources",
      "href": "#resources"
    }
  },
  "value_props": [
    {
      "id": "productivity",
      "title": "Productivity Gains",
      "bullets": [
        "30-50% faster feature development",
        "Reduce boilerplate and repetitive tasks",
        "Focus on architecture and business logic"
      ]
    },
    {
      "id": "quality",
      "title": "Code Quality",
      "bullets": [
        "Consistent coding patterns",
        "Built-in best practices",
        "Real-time code review and suggestions"
      ]
    },
    {
      "id": "learning",
      "title": "Team Learning",
      "bullets": [
        "Learn new languages and frameworks",
        "Discover APIs and patterns",
        "Upskill junior developers faster"
      ]
    }
  ],
  "sections": [
    {
      "id": "approach",
      "title": "Our Approach",
      "type": "cards",
      "cards": [
        {
          "title": "Discovery & Assessment",
          "body": "Evaluate your team's needs and current development workflows",
          "deliverables": [
            "Team readiness assessment",
            "Tool selection matrix",
            "ROI projections"
          ]
        },
        {
          "title": "Pilot Program",
          "body": "Run controlled experiments with selected teams and projects",
          "deliverables": [
            "Pilot team training",
            "Success metrics tracking",
            "Feedback loops"
          ]
        },
        {
          "title": "Scale & Optimize",
          "body": "Roll out successful patterns across the organization",
          "deliverables": [
            "Playbooks and guidelines",
            "Training programs",
            "Continuous improvement"
          ]
        }
      ]
    },
    {
      "id": "tools",
      "title": "AI Coding Tools",
      "type": "accordion",
      "intro": "Compare leading AI code generation tools and their capabilities",
      "items": [
        {
          "label": "GitHub Copilot",
          "content": [
            "**Best for:** Teams already using GitHub and VS Code",
            "**Strengths:** Deep IDE integration, multi-language support, enterprise features",
            "**Pricing:** $10-19/user/month depending on plan",
            "**Key Features:** Code completion, test generation, documentation, chat interface"
          ]
        },
        {
          "label": "Claude (Anthropic)",
          "content": [
            "**Best for:** Complex reasoning and large context windows",
            "**Strengths:** Superior understanding of requirements, excellent at refactoring",
            "**Pricing:** $20/month for Pro, API pricing available",
            "**Key Features:** 100K+ token context, code explanation, architecture design"
          ]
        },
        {
          "label": "Cursor",
          "content": [
            "**Best for:** Teams wanting AI-first IDE experience",
            "**Strengths:** Built-in AI features, codebase understanding, multi-file edits",
            "**Pricing:** $20/month per user",
            "**Key Features:** AI-native IDE, codebase chat, automatic refactoring"
          ]
        },
        {
          "label": "ChatGPT/GPT-4",
          "content": [
            "**Best for:** Versatile coding assistance and learning",
            "**Strengths:** Wide knowledge base, good at explaining concepts",
            "**Pricing:** $20/month for Plus, API pricing varies",
            "**Key Features:** Code generation, debugging help, architecture discussions"
          ]
        }
      ]
    },
    {
      "id": "best-practices",
      "title": "Best Practices",
      "type": "bullets",
      "bullets": [
        "**Start Small:** Begin with low-risk projects and willing early adopters",
        "**Prompt Engineering:** Train teams on effective prompt writing techniques",
        "**Code Review:** Always review AI-generated code before merging",
        "**Security First:** Implement policies for handling sensitive data",
        "**Measure Impact:** Track metrics like velocity, quality, and developer satisfaction",
        "**Continuous Learning:** Share successful patterns and learnings across teams"
      ]
    },
    {
      "id": "implementation",
      "title": "Implementation Roadmap",
      "type": "process",
      "steps": [
        "Executive alignment and budget approval",
        "Form AI enablement task force",
        "Select pilot teams and projects",
        "Choose and procure tools",
        "Develop governance and security policies",
        "Train pilot teams",
        "Run 30-60 day pilot",
        "Gather feedback and metrics",
        "Refine approach based on learnings",
        "Scale to additional teams",
        "Establish center of excellence",
        "Continuous improvement and optimization"
      ]
    },
    {
      "id": "challenges",
      "title": "Common Challenges",
      "type": "accordion",
      "items": [
        {
          "label": "Security and IP Concerns",
          "content": [
            "Implement clear policies on code sharing",
            "Use enterprise versions with data protection",
            "Regular security audits and compliance checks",
            "Train teams on secure AI usage"
          ]
        },
        {
          "label": "Quality Control",
          "content": [
            "Maintain rigorous code review processes",
            "Implement automated testing for AI-generated code",
            "Set clear quality standards and metrics",
            "Regular audits of AI-generated code"
          ]
        },
        {
          "label": "Developer Resistance",
          "content": [
            "Focus on AI as augmentation, not replacement",
            "Showcase success stories and productivity gains",
            "Provide comprehensive training and support",
            "Address concerns transparently"
          ]
        },
        {
          "label": "Cost Justification",
          "content": [
            "Track concrete metrics: velocity, bug rates, time-to-market",
            "Calculate ROI based on developer time saved",
            "Start with small pilot to prove value",
            "Compare against cost of not adopting"
          ]
        }
      ]
    }
  ],
  "resources": [
    {
      "title": "GitHub Copilot Enterprise Documentation",
      "url": "https://docs.github.com/en/copilot",
      "kind": "Documentation",
      "notes": "Official guide for enterprise deployment"
    },
    {
      "title": "Anthropic Claude Best Practices",
      "url": "https://www.anthropic.com/claude",
      "kind": "Guide",
      "notes": "Tips for effective Claude usage in development"
    },
    {
      "title": "AI Code Generation Security Guidelines",
      "url": "https://owasp.org/",
      "kind": "Security",
      "notes": "OWASP guidelines for secure AI adoption"
    },
    {
      "title": "Developer Productivity Metrics",
      "url": "https://github.blog/2021-08-11-metrics-for-developer-productivity/",
      "kind": "Research",
      "notes": "How to measure impact of AI tools"
    }
  ],
  "cta": {
    "headline": "Ready to Transform Your Development Process?",
    "subhead": "Let's discuss how AI code generation can accelerate your team",
    "actions": [
      {
        "label": "Schedule Consultation",
        "href": "mailto:austin.wallace@hotmail.com?subject=AI%20Code%20Generation%20Consultation"
      }
    ]
  }
}
````

## File: src/lib/data/resume.json
````json
{
  "basics": {
    "name": "Austin Wallace",
    "label": "Data Engineer",
    "phone": "604.603.8668",
    "email": "austeane@gmail.com",
    "location": { "city": "Victoria, BC" },
    "summary": "Data Engineer with 9+ years building Databricks/Snowflake/dbt platforms that move billions of rows. Known for improving team practices and collaboration, and establishing best practices for AI use in security-critical settings.",
    "profiles": [
      { "network": "GitHub", "username": "austeane", "url": "https://github.com/austeane" },
      { "network": "LinkedIn", "username": "austintwallace", "url": "https://www.linkedin.com/in/austintwallace/" }
    ]
  },
  "work": [
    {
      "name": "Clio",
      "position": "Data Engineer",
      "location": "Vancouver, British Columbia",
      "startDate": "2024-08",
      "endDate": "",
      "summary": "Own 10+ Databricks pipelines and Terraform infrastructure.",
      "highlights": [
        "Unlocked $1 million+ worth of value by enabling analysis of our AI assistant's conversations",
        "Automated token rotation for Looker/dbt→Databricks, eliminating an average of an incident every month from expired tokens",
        "Built a schema/table diff tool (Python) used during Redshift→Databricks migration; caught 20+ data defects pre-launch and enabled final cutoff of infra costing 100k+ a year",
        "Wrote the company AI best-practices guide; directly responsible for new model usage by 500+ engineers",
        "Coached or onboarded 20+ engineers on their specific AI workflow; helped increase AI usage by 20x while remaining responsible"
      ]
    },
    {
      "name": "New Jersey Devils",
      "position": "Data Developer",
      "location": "Vancouver, British Columbia",
      "startDate": "2022-05",
      "endDate": "2024-08",
      "summary": "Sole Data Developer architecting end-to-end data platform.",
      "highlights": [
        "Architected, built, and operated end-to-end data platform supporting 10 analysts/managers responsible for allocating millions of dollars of player salary",
        "Ingested NHL tracking at 10 million rows a game; increasing available data by 10,000x",
        "Built/maintained 40+ dbt models across Postgres/Snowflake; enabled both detailed analysis and summaries that directly powered live dashboards"
      ]
    },
    {
      "name": "Teck Resources – RACE21",
      "position": "Data Developer",
      "location": "Vancouver, British Columbia",
      "startDate": "2020-10",
      "endDate": "2022-05",
      "summary": "Transformed legacy alert system into modern service.",
      "highlights": [
        "As part of a cross-functional team of three, transformed an untestable, unextendible, esoteric alert system based in PostgreSQL Stored Procedures",
        "Built unit and integration tested, modularized, configurable, well-documented alert service written in Python",
        "Deployed with Terraform to Microsoft Azure"
      ]
    }
  ],
  "projects": [
    {
      "name": "Qdrill",
      "description": "Real-world quadball coaching app featuring real-time drag-and-drop practice planning and polished practice viewer. Built for real users including Team Canada.",
      "url": "https://qdrill.app",
      "keywords": ["SvelteKit", "Postgres", "Vercel", "87k+ LOC"],
      "highlights": [
        "Enforced testing and code quality while leveraging AI pair-programming to accelerate delivery"
      ]
    },
    {
      "name": "Solstice",
      "description": "Developing a modern alternative to Topscore for Quadball Canada (target 2026). 20k+ lines of end-to-end-tested TypeScript with emphasis on professional quality and best practices.",
      "url": "https://github.com/soleilheaney/solstice",
      "keywords": ["TypeScript", "React", "TanStack Start"]
    }
  ],
  "education": [{
    "institution": "University of British Columbia (UBC)",
    "location": "Vancouver",
    "area": "Analytical Sports Management",
    "studyType": "B.Sc.",
    "startDate": "2012",
    "endDate": "2018",
    "description": "Machine Learning (Major) / Commerce (Minor). Designed and got approved an entirely unique degree combining business, statistics, and machine learning, which included graduate-level coursework."
  }],
  "skills": [
    { "name": "Data Platforms", "keywords": ["Databricks", "Unity Catalog", "Snowflake", "dbt", "PostgreSQL", "Delta Lake"] },
    { "name": "Programming", "keywords": ["Python", "SQL", "Go", "pandas", "PySpark"] },
    { "name": "Cloud & Infrastructure", "keywords": ["AWS S3/IAM", "Azure",  "Terraform", "CI/CD"] },
    { "name": "Data Engineering", "keywords": ["Data Modeling", "Data Warehousing", "Batch & Near-Real-Time Pipelines", "Observability"] },
    { "name": "AI & Collaboration", "keywords": ["Responsible AI Enablement", "Stakeholder Collaboration", "Best Practices Guide"] }
  ],
  "accomplishments": [
    {
      "title": "NHL Data Integration",
      "summary": "Successfully integrated real-time NHL tracking data, enhancing analytical capabilities and building a competitive advantage"
    },
    {
      "title": "Data Visualization Patent",
      "summary": "Developed a patented technique for data visualization"
    },
    {
      "title": "International Quidditch Association",
      "summary": "Served as Chair of Board of Directors, leading 30+ national governing bodies of one of the fastest growing sports worldwide"
    },
    {
      "title": "Media Startup CEO",
      "summary": "As CEO of a volunteer-based media startup, propelled growth to 70 staff and 30 countries"
    }
  ]
}
````

## File: src/routes/robots.txt/+server.ts
````typescript
import type { RequestHandler } from '@sveltejs/kit';

export const GET: RequestHandler = () => {
  const body = [
    'User-agent: *',
    'Allow: /',
    'Disallow: /with/'
  ].join('\n');

  return new Response(body, {
    headers: {
      'content-type': 'text/plain; charset=utf-8',
      'cache-control': 'public, max-age=3600'
    }
  });
};
````

## File: src/routes/with/[tool]/enablement/+page.ts
````typescript
import { error } from '@sveltejs/kit';
import { PROVIDERS } from '$lib/providers';

/**
 * SSR-only host page for clean '/with/<tool>/enablement' URLs.
 * We intentionally do NOT prerender this page.
 * The actual variant UI is static at /variants/<tool>/enablement/index.html and is iframed here.
 * Reason: CloudFront/SST won't auto-map '/with/foo/enablement' → '/with/foo/enablement/index.html'.
 * SSR guarantees direct access returns 200 without edge rewrites.
 */
export const prerender = false;

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
````

## File: src/routes/with/[tool]/+page.ts
````typescript
import type { PageLoad } from './$types';
import { PROVIDERS } from '$lib/providers';

/**
 * SSR-only host page for clean '/with/<tool>' URLs.
 * We intentionally do NOT prerender this page.
 * The actual variant UI is static at /variants/<tool>/index.html and is iframed here.
 * Reason: CloudFront/SST won't auto-map '/with/foo' → '/with/foo/index.html'.
 * SSR guarantees direct access returns 200 without edge rewrites.
 */
export const prerender = false;

export const load: PageLoad = async ({ params }) => {
  const provider = PROVIDERS.find((p) => p.id === params.tool);
  return {
    provider,
    providers: PROVIDERS
  };
};
````

## File: src/routes/+layout.ts
````typescript
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
````

## File: src/routes/+page.svelte
````
<script lang="ts">
  export let data: any;
  const resume = data.resume;

  const contactLinks = [
    resume.basics?.website && { label: 'Website', url: resume.basics.website },
    resume.basics?.email && { label: resume.basics.email, url: `mailto:${resume.basics.email}` },
    resume.basics?.location?.city && { label: resume.basics.location.city, url: null },
    resume.basics?.profiles?.find((p:any)=>p.network?.toLowerCase()==='github') && {
      label: 'GitHub',
      url: resume.basics.profiles.find((p:any)=>p.network?.toLowerCase()==='github').url
    },
    resume.basics?.profiles?.find((p:any)=>p.network?.toLowerCase()==='linkedin') && {
      label: 'LinkedIn',
      url: resume.basics.profiles.find((p:any)=>p.network?.toLowerCase()==='linkedin').url
    }
  ].filter(Boolean) as {label:string,url:string|null}[];
</script>

<section aria-labelledby="title">
  <h1 id="title" style="font-size:2rem;line-height:1.1;margin:.25rem 0 .5rem 0;">
    {resume.basics?.name || 'Your Name'}
  </h1>
  <p style="margin:0;color:var(--muted);">{resume.basics?.label || 'AI Engineer · AI Enablement Specialist'}</p>
  {#if contactLinks.length}
    <ul style="list-style:none;padding:0;margin:.75rem 0 0 0;display:flex;gap:1rem;flex-wrap:wrap;">
      {#each contactLinks as c}
        <li>
          {#if c.url}
            <a href={c.url} rel="noopener noreferrer">{c.label}</a>
          {:else}
            <span>{c.label}</span>
          {/if}
        </li>
      {/each}
    </ul>
  {/if}
</section>

<hr style="margin:1.25rem 0;border:0;border-top:1px solid var(--border);" />

{#if resume.basics?.summary}
  <section aria-labelledby="summary">
    <h2 id="summary" style="font-size:1rem;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.5rem;">Summary</h2>
    <p style="margin:0;max-width:70ch;">{resume.basics.summary}</p>
  </section>

  <hr style="margin:1.25rem 0;border:0;border-top:1px solid var(--border);" />
{/if}

{#if resume.work?.length}
  <section aria-labelledby="work">
    <h2 id="work" style="font-size:1rem;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.5rem;">Experience</h2>
    {#each resume.work as job (job.name + job.position)}
      <article style="margin-bottom:1rem;">
        <div style="display:flex;justify-content:space-between;gap:1rem;flex-wrap:wrap;">
          <div>
            <strong>{job.position}</strong>{' @ '}{job.name}
          </div>
          <div style="color:var(--muted);">
            {job.startDate}{job.endDate ? ` – ${job.endDate}` : ' – Present'}
          </div>
        </div>
        {#if job.summary}<p style="margin:.25rem 0 0 0;max-width:70ch;">{job.summary}</p>{/if}
        {#if job.highlights?.length}
          <ul style="margin:.25rem 0 0 1rem;">
            {#each job.highlights as h}<li>{h}</li>{/each}
          </ul>
        {/if}
      </article>
    {/each}
  </section>

  <hr style="margin:1.25rem 0;border:0;border-top:1px solid var(--border);" />
{/if}

{#if resume.projects?.length}
  <section aria-labelledby="projects">
    <h2 id="projects" style="font-size:1rem;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.5rem;">Projects</h2>
    <ul style="list-style:disc;margin:.25rem 0 0 1rem;">
      {#each resume.projects as p}
        <li>
          <strong>{p.name}</strong>{p.url ? ' — ' : ''}{#if p.url}<a rel="noopener noreferrer" href={p.url}>{p.url}</a>{/if}
          {#if p.description}<div style="margin:.25rem 0 0 0;max-width:70ch;">{p.description}</div>{/if}
          {#if p.keywords?.length}<div style="color:var(--muted);font-size:.9rem;margin-top:.25rem;">{p.keywords.join(' · ')}</div>{/if}
        </li>
      {/each}
    </ul>
  </section>

  <hr style="margin:1.25rem 0;border:0;border-top:1px solid var(--border);" />
{/if}

{#if resume.skills?.length}
  <section aria-labelledby="skills">
    <h2 id="skills" style="font-size:1rem;text-transform:uppercase;letter-spacing:.06em;margin-bottom:.5rem;">Skills</h2>
    <ul style="list-style:none;padding:0;margin:0;display:flex;flex-wrap:wrap;gap:.5rem;">
      {#each resume.skills as s}
        <li style="border:1px solid var(--border);padding:.25rem .5rem;border-radius:999px;">
          {s.name}{s.keywords?.length ? ` — ${s.keywords.join(', ')}` : ''}
        </li>
      {/each}
    </ul>
  </section>
{/if}
````

## File: src/app.html
````html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <link rel="icon" href="data:," />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta name="color-scheme" content="light" />
    %sveltekit.head%
    <style>
      /* Minimal, high-contrast defaults (no custom fonts) */
      :root {
        --fg: #111;
        --bg: #fff;
        --muted: #666;
        --border: #e5e5e5;
        --accent: #000;
      }
      * { box-sizing: border-box; }
      html, body { padding: 0; margin: 0; background: var(--bg); color: var(--fg); }
      a { color: var(--accent); }
      code, pre { font-family: ui-monospace, SFMono-Regular, Menlo, Consolas, "Liberation Mono", monospace; }
    </style>
  </head>
  <body>
    <div style="position:fixed;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden;">
      <a href="#content">Skip to content</a>
    </div>
    %sveltekit.body%
  </body>
</html>
````

## File: src/hooks.server.ts
````typescript
import type { Handle } from '@sveltejs/kit';

// No global CORS mutation required. All apps fetch `/data/*` via the same
// CloudFront Router origin in production, so requests are same-origin.
export const handle: Handle = async ({ event, resolve }) => resolve(event);
````

## File: variants/nextjs-azure/next.config.mjs
````
/** @type {import('next').NextConfig} */
const isVercel = !!process.env.VERCEL;
const basePath = "/azure/next";

const nextConfig = {
  basePath,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
    NEXT_DATA_ORIGIN: process.env.NEXT_DATA_ORIGIN || "https://d2li8p8xclq49l.cloudfront.net",
  },
  async rewrites() {
    const origin = process.env.NEXT_DATA_ORIGIN || "https://d2li8p8xclq49l.cloudfront.net";
    return origin ? [{ source: '/data/:path*', destination: `${origin}/data/:path*` }] : [];
  },
  async redirects() {
    return [
      { source: '/', destination: '/resume', permanent: false },
    ];
  },
  ...(isVercel ? {} : { output: "standalone" }),
};

export default nextConfig;
````

## File: variants/react-azure/src/App.tsx
````typescript
import { Routes, Route, Link, useParams, Navigate } from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import Layout from './Layout';
import './App.css';

type Resume = {
  basics: {
    name: string;
    label: string;
    website?: string;
    email?: string;
    location?: { city?: string };
    profiles?: { network: string; url: string }[];
    summary?: string;
  };
  work: { name: string; position: string; startDate?: string; endDate?: string; summary?: string; highlights?: string[] }[];
  projects?: { name: string; description?: string; url?: string; keywords?: string[] }[];
  skills?: { name: string; keywords?: string[] }[];
};

function MinimalVariant() {
  const [data, setData] = useState<Resume | null>(null);
  const [err, setErr] = useState<string | null>(null);

  useEffect(() => {
    const url = import.meta.env.VITE_DATA_URL || '/data/resume.json';
    fetch(url, { headers: { Accept: 'application/json' } })
      .then((r) => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
      .then(setData)
      .catch((e) => setErr(e.message));
  }, []);

  const basics = data?.basics;
  const work = data?.work ?? [];
  const projects = data?.projects ?? [];
  const skills = data?.skills ?? [];
  const contacts = useMemo(() => {
    const items: { label: string; url: string | null }[] = [];
    if (basics?.website) items.push({ label: 'Website', url: basics.website });
    if (basics?.email) items.push({ label: basics.email, url: `mailto:${basics.email}` });
    if (basics?.location?.city) items.push({ label: basics.location.city, url: null });
    const gh = basics?.profiles?.find((p) => p.network?.toLowerCase() === 'github');
    const li = basics?.profiles?.find((p) => p.network?.toLowerCase() === 'linkedin');
    if (gh) items.push({ label: 'GitHub', url: gh.url });
    if (li) items.push({ label: 'LinkedIn', url: li.url });
    return items;
  }, [basics]);

  if (err) return <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}><p>Failed to load resume: {err}</p></div>;
  if (!data) return <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}><p>Loading…</p></div>;

  return (
    <div style={{ padding: '1.25rem', maxWidth: 2000, margin: '0 auto' }}>
      <section aria-labelledby="title">
        <h1 id="title" style={{ fontSize: '2rem', lineHeight: 1.1, margin: '.25rem 0 .5rem 0' }}>
          {basics?.name || 'Your Name'}
        </h1>
        <p style={{ margin: 0, color: '#666' }}>{basics?.label || 'AI Engineer · AI Enablement Specialist'}</p>
        {!!contacts.length && (
          <ul style={{ listStyle: 'none', padding: 0, margin: '.75rem 0 0 0', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            {contacts.map((c, i) => (
              <li key={i}>
                {c.url ? (
                  <a href={c.url} target="_blank" rel="noopener noreferrer">{c.label}</a>
                ) : (
                  <span>{c.label}</span>
                )}
              </li>
            ))}
          </ul>
        )}
      </section>

      <hr style={{ margin: '1.25rem 0', border: 0, borderTop: '1px solid #eee' }} />

      {basics?.summary && (
        <section aria-labelledby="summary">
          <h2 id="summary" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.5rem' }}>Summary</h2>
          <p style={{ margin: 0, maxWidth: '70ch' }}>{basics.summary}</p>
        </section>
      )}

      {basics?.summary && (<hr style={{ margin: '1.25rem 0', border: 0, borderTop: '1px solid #eee' }} />)}

      {!!work.length && (
        <section aria-labelledby="work">
          <h2 id="work" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.5rem' }}>Experience</h2>
          {work.map((job, i) => (
            <article key={i} style={{ marginBottom: '1rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap' }}>
                <div>
                  <strong>{job.position}</strong>{' @ '}{job.name}
                </div>
                <div style={{ color: '#666' }}>
                  {job.startDate}{job.endDate ? ` – ${job.endDate}` : ' – Present'}
                </div>
              </div>
              {job.summary && <p style={{ margin: '.25rem 0 0 0', maxWidth: '70ch' }}>{job.summary}</p>}
              {!!job.highlights?.length && (
                <ul style={{ margin: '.25rem 0 0 1rem' }}>
                  {job.highlights.map((h, j) => (<li key={j}>{h}</li>))}
                </ul>
              )}
            </article>
          ))}
        </section>
      )}

      {!!work.length && (<hr style={{ margin: '1.25rem 0', border: 0, borderTop: '1px solid #eee' }} />)}

      {!!projects.length && (
        <section aria-labelledby="projects">
          <h2 id="projects" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.5rem' }}>Projects</h2>
          <ul style={{ listStyle: 'disc', margin: '.25rem 0 0 1rem' }}>
            {projects.map((p, i) => (
              <li key={i}>
                <strong>{p.name}</strong>
                {p.url && (
                  <>
                    {' '}— <a href={p.url} target="_blank" rel="noopener noreferrer">{p.url}</a>
                  </>
                )}
                {p.description && (<div style={{ margin: '.25rem 0 0 0', maxWidth: '70ch' }}>{p.description}</div>)}
                {!!p.keywords?.length && (
                  <div style={{ color: '#666', fontSize: '.9rem', marginTop: '.25rem' }}>{p.keywords.join(' · ')}</div>
                )}
              </li>
            ))}
          </ul>
        </section>
      )}

      {!!projects.length && (<hr style={{ margin: '1.25rem 0', border: 0, borderTop: '1px solid #eee' }} />)}

      {!!skills.length && (
        <section aria-labelledby="skills">
          <h2 id="skills" style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '.06em', marginBottom: '.5rem' }}>Skills</h2>
          <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexWrap: 'wrap', gap: '.5rem' }}>
            {skills.map((s, i) => (
              <li key={i} style={{ border: '1px solid #eee', padding: '.25rem .5rem', borderRadius: '999px' }}>
                {s.name}{s.keywords?.length ? ` — ${s.keywords.join(', ')}` : ''}
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}

function MinimalEnablement() {
  return (
    <div style={{ padding: '2rem', maxWidth: 900, margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '0.5rem' }}>AI Enablement</h1>
      <p style={{ color: '#666', marginBottom: '1rem' }}>
        This deployment focuses on variant hosting. View the canonical enablement content on AWS/SST:
        {' '}<a href="https://d2li8p8xclq49l.cloudfront.net/enablement" target="_blank" rel="noopener noreferrer">Enablement on AWS</a>.
      </p>
    </div>
  );
}

function VariantView() {
  const { tool } = useParams();
  const src = `/azure/react/variants/${tool}/index.html`;
  return (
    <div style={{ height: "100%", display: "flex" }}>
      <iframe
        title={`AI Variant: ${tool}`}
        src={src}
        style={{ width: "100%", height: "100%", border: "0", background: "#fff" }}
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
}

function VariantEnablement() {
  const { tool } = useParams();
  const src = `/azure/react/variants/${tool}/enablement/index.html`;
  return (
    <div style={{ height: "100%", display: "flex" }}>
      <iframe
        title={`AI Enablement - ${tool}`}
        src={src}
        style={{ width: "100%", height: "100%", border: "0", background: "#fff" }}
        sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
}

function VariantIndex() {
  const variants = [
    { id: "claude-code", name: "Claude Code" },
    { id: "gpt-5-pro", name: "GPT-5 Pro" },
    { id: "gpt-5-thinking", name: "GPT-5 Thinking" },
    { id: "lovable", name: "Lovable" },
    { id: "bolt", name: "Bolt" },
    { id: "firebase", name: "Firebase Studio" },
  ];
  return (
    <main style={{ maxWidth: 960, margin: "2rem auto", padding: "0 1rem" }}>
      <h1>AI Variants on React (SWA)</h1>
      <p>Served from <code>/azure/react/variants/&lt;tool&gt;/index.html</code>.</p>
      <ul>
        {variants.map(v => (
          <li key={v.id}><Link to={`/with/${v.id}`}>{v.name}</Link></li>
        ))}
      </ul>
    </main>
  );
}

export default function App() {
  return (
    <Layout>
      <Routes>
        {/* Canonical resume route */}
        <Route path="/resume" element={<MinimalVariant />} />
        {/* Redirect root to /resume to keep URL canonical */}
        <Route path="/" element={<Navigate to="/resume" replace />} />
        <Route path="/enablement" element={<MinimalEnablement />} />
        <Route path="/with" element={<VariantIndex />} />
        <Route path="/with/:tool" element={<VariantView />} />
        <Route path="/with/:tool/enablement" element={<VariantEnablement />} />
      </Routes>
    </Layout>
  );
}
````

## File: variants/react-azure/staticwebapp.config.json
````json
{
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": [
      "/azure/react/assets/*",
      "/azure/react/variants/*",
      "/assets/*",
      "/images/*.{png,jpg,gif}",
      "/css/*",
      "/js/*",
      "/data/*"
    ]
  },
  "forwardingGateway": {
    "allowedForwardedHosts": [
      "d2li8p8xclq49l.cloudfront.net",
      "www.austinwallace.ca"
    ]
  },
  "routes": [
    {
      "route": "/azure/react",
      "redirect": "/azure/react/resume",
      "statusCode": 301
    },
    {
      "route": "/azure/react/assets/*",
      "rewrite": "/assets/{*path}"
    },
    {
      "route": "/azure/react/*",
      "rewrite": "/{*path}"
    }
  ],
  "mimeTypes": {
    ".json": "application/json",
    ".js": "application/javascript",
    ".mjs": "application/javascript"
  },
  "globalHeaders": {
    "Cache-Control": "public, max-age=3600"
  }
}
````

## File: variants/react-azure/vite.config.ts
````typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Ensure assets & routes are under /azure/react
  base: '/azure/react/',
  build: {
    // Place build under dist/azure/react so files are served at /azure/react/* without rewrites
    outDir: 'dist/azure/react',
    assetsDir: 'assets',
    sourcemap: false,
  },
  server: {
    proxy: {
      '/data': 'http://localhost:5173',
    }
  }
});
````

## File: variants/tanstack-gcp/src/routes/__root.tsx
````typescript
import { createRootRoute, Outlet } from '@tanstack/react-router';
import Layout from '../components/Layout';
import '../styles/globals.css';
import '../styles/layout.css';

export const Route = createRootRoute({
  component: RootComponent,
});

function RootComponent() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}
````

## File: variants/tanstack-gcp/src/routes/index.tsx
````typescript
import { createFileRoute, redirect } from '@tanstack/react-router';

// Redirect the root route to the canonical /resume path
export const Route = createFileRoute('/')({
  beforeLoad: () => {
    throw redirect({ to: '/resume' });
  },
});
// Note: the canonical resume component now lives at /routes/resume.tsx
````

## File: variants/tanstack-gcp/netlify.toml
````toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

[[redirects]]
  from = "/gcp/tanstack"
  to = "/gcp/tanstack/resume"
  status = 308
  force = true

[[redirects]]
  from = "/gcp/tanstack/assets/*"
  to = "/assets/:splat"
  status = 200
  force = false

[[redirects]]
  from = "/gcp/tanstack/variants/*"
  to = "/variants/:splat"
  status = 200
  force = false

[[redirects]]
  from = "/gcp/tanstack/*"
  to = "/index.html"
  status = 200
  force = false

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "SAMEORIGIN"
    X-Content-Type-Options = "nosniff"
    X-XSS-Protection = "1; mode=block"
````

## File: variants/tanstack-gcp/vite.config.ts
````typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { TanStackRouterVite } from '@tanstack/router-plugin/vite';

export default defineConfig({
  plugins: [
    react(),
    TanStackRouterVite({
      routesDirectory: './src/routes',
      generatedRouteTree: './src/routeTree.gen.ts',
    }),
  ],
  base: '/gcp/tanstack/',
  build: {
    outDir: 'dist',
  },
  server: {
    proxy: {
      '/data': 'http://localhost:5173',
    },
  },
});
````

## File: vite.config.ts
````typescript
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [sveltekit()]
});
````

## File: scripts/deploy-azure-react.sh
````bash
#!/bin/bash

# Deploy React to Azure Static Web Apps
set -e

echo "==================================="
echo "Deploying React to Azure Static Web Apps"
echo "==================================="

# Ensure six AI variants are copied into this app
echo "Syncing AI variants into React public/variants..."
./scripts/sync-variants.sh

# Load deployment token from .env.azure if it exists
if [ -f .env.azure ]; then
    source .env.azure
fi

if [ -z "$AZURE_SWA_DEPLOYMENT_TOKEN" ]; then
    echo "Error: AZURE_SWA_DEPLOYMENT_TOKEN not found."
    echo "Run ./scripts/setup-azure-react.sh first or set the token manually."
    exit 1
fi

# Check if SWA CLI is installed
if ! command -v swa &> /dev/null; then
    echo "Installing Azure Static Web Apps CLI..."
    npm install -g @azure/static-web-apps-cli
fi

cd variants/react-azure

# Build directory aligned with vite.config.ts outDir setting
BUILD_DIR="dist/azure/react"

# Ensure dependencies are installed for reproducible builds
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

echo "Building React app..."
npm run build

echo "Copying Static Web Apps config into build directory..."
if [ -f staticwebapp.config.json ]; then
  cp staticwebapp.config.json "$BUILD_DIR/staticwebapp.config.json"
else
  echo "Error: staticwebapp.config.json missing. See variants/react-azure/."
  exit 1
fi

echo "Deploying to Azure Static Web Apps..."
swa deploy "$BUILD_DIR" \
    --deployment-token $AZURE_SWA_DEPLOYMENT_TOKEN \
    --env production

echo ""
echo "Deployment complete!"
echo "View at: https://austin-resume-react.azurestaticapps.net"
````

## File: src/routes/data/enablement.json/+server.ts
````typescript
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import enablementData from '$lib/data/enablement.json';
import crypto from 'crypto';

export const prerender = false;

// Generate ETag based on content hash
const generateETag = (data: any): string => {
  const content = JSON.stringify(data);
  return `"${crypto.createHash('md5').update(content).digest('hex')}"`;
};

export const GET: RequestHandler = ({ request }) => {
  const etag = generateETag(enablementData);
  const ifNoneMatch = request.headers.get('if-none-match');
  
  // Check if client has current version
  if (ifNoneMatch === etag) {
    return new Response(null, {
      status: 304,
      headers: {
        'ETag': etag,
        'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400'
      }
    });
  }
  
  return json(enablementData, {
    headers: {
      'ETag': etag,
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
      'Content-Type': 'application/json'
    }
  });
};

export function OPTIONS() {
  return new Response(null, { status: 200 });
}
````

## File: src/routes/data/resume.json/+server.ts
````typescript
import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import resumeData from '$lib/data/resume.json';
import crypto from 'crypto';

export const prerender = false;

// Generate ETag based on content hash
const generateETag = (data: any): string => {
  const content = JSON.stringify(data);
  return `"${crypto.createHash('md5').update(content).digest('hex')}"`;
};

export const GET: RequestHandler = ({ request }) => {
  const etag = generateETag(resumeData);
  const ifNoneMatch = request.headers.get('if-none-match');
  
  // Check if client has current version
  if (ifNoneMatch === etag) {
    return new Response(null, {
      status: 304,
      headers: {
        'ETag': etag,
        'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400'
      }
    });
  }
  
  return json(resumeData, {
    headers: {
      'ETag': etag,
      'Cache-Control': 'public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400',
      'Content-Type': 'application/json'
    }
  });
};

export function OPTIONS() {
  return new Response(null, { status: 200 });
}
````

## File: src/routes/enablement/+page.svelte
````
<script lang="ts">
  import { onMount } from 'svelte';
  
  export let data: any;
  const { enablement } = data;
  
  let expandedSections: Record<string, boolean> = {};
  let currentHash = '';
  
  onMount(() => {
    if (window.location.hash) {
      currentHash = window.location.hash.slice(1);
      expandSection(currentHash);
      setTimeout(() => {
        document.getElementById(currentHash)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    }
    
    window.addEventListener('hashchange', () => {
      currentHash = window.location.hash.slice(1);
      expandSection(currentHash);
    });
  });
  
  function expandSection(id: string) {
    const section = enablement.sections.find((s: any) => {
      if (s.id === id) return true;
      if (s.type === 'accordion' && s.items) {
        return s.items.some((item: any, idx: number) => `${s.id}-${idx}` === id);
      }
      return false;
    });
    
    if (section) {
      expandedSections[section.id] = true;
      if (section.type === 'accordion') {
        const itemIdx = id.split('-').pop();
        if (itemIdx) {
          expandedSections[id] = true;
        }
      }
    }
  }
  
  function toggleSection(id: string) {
    expandedSections[id] = !expandedSections[id];
  }
  
  function copyLink(id: string) {
    const url = `${window.location.origin}${window.location.pathname}#${id}`;
    navigator.clipboard.writeText(url);
  }
  
  const tocSections = [
    ...enablement.value_props.map((vp: any) => ({
      id: vp.id,
      title: vp.title,
      level: 2
    })),
    ...enablement.sections.map((s: any) => ({
      id: s.id,
      title: s.title,
      level: 2,
      items: s.type === 'accordion' ? s.items?.map((item: any, idx: number) => ({
        id: `${s.id}-${idx}`,
        title: item.label,
        level: 3
      })) : undefined
    }))
  ];
</script>

<style>
  .enablement-container {
    display: grid;
    grid-template-columns: 200px 1fr;
    gap: 2rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem;
  }
  
  @media (max-width: 768px) {
    .enablement-container {
      grid-template-columns: 1fr;
      padding: 1rem;
    }
    
    .toc-desktop {
      display: none;
    }
  }
  
  @media (min-width: 769px) {
    .toc-mobile {
      display: none;
    }
  }
  
  .toc {
    position: sticky;
    top: 2rem;
    height: fit-content;
    max-height: calc(100vh - 4rem);
    overflow-y: auto;
  }
  
  .toc h3 {
    font-size: 0.875rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    margin-bottom: 0.75rem;
    color: var(--muted);
  }
  
  .toc-list, .toc-sublist {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .toc-sublist {
    margin-left: 1rem;
  }
  
  .toc-item {
    margin-bottom: 0.5rem;
  }
  
  .toc-item.level-3 {
    margin-left: 1rem;
    font-size: 0.875rem;
  }
  
  .toc-link {
    color: var(--muted);
    text-decoration: none;
    display: block;
    padding: 0.25rem 0;
    transition: color 0.2s;
  }
  
  .toc-link:hover {
    color: var(--text);
  }
  
  .toc-link.active {
    color: var(--text);
    font-weight: 500;
  }
  
  .hero {
    margin-bottom: 3rem;
  }
  
  .hero h1 {
    font-size: 2.5rem;
    line-height: 1.1;
    margin-bottom: 0.5rem;
  }
  
  .hero-subtitle {
    font-size: 1.25rem;
    color: var(--muted);
    margin-bottom: 1.5rem;
  }
  
  .hero-actions {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
  }
  
  .btn {
    display: inline-block;
    padding: 0.5rem 1rem;
    border: 1px solid var(--border);
    border-radius: 4px;
    text-decoration: none;
    transition: background-color 0.2s;
  }
  
  .btn-primary {
    background: var(--text);
    color: var(--bg);
  }
  
  .btn-primary:hover {
    opacity: 0.9;
  }
  
  .btn-secondary:hover {
    background: var(--border);
  }
  
  .value-props {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-bottom: 3rem;
  }
  
  .value-prop {
    border: 1px solid var(--border);
    padding: 1.5rem;
    border-radius: 4px;
  }
  
  .value-prop h3 {
    font-size: 1.125rem;
    margin-bottom: 0.75rem;
  }
  
  .value-prop ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .value-prop li {
    margin-bottom: 0.5rem;
    padding-left: 1.25rem;
    position: relative;
  }
  
  .value-prop li::before {
    content: "→";
    position: absolute;
    left: 0;
    color: var(--muted);
  }
  
  .section {
    margin-bottom: 3rem;
  }
  
  .section-header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 1rem;
  }
  
  .section-title {
    font-size: 1.5rem;
    margin: 0;
  }
  
  .copy-link {
    padding: 0.25rem 0.5rem;
    background: none;
    border: 1px solid var(--border);
    border-radius: 4px;
    cursor: pointer;
    font-size: 0.875rem;
    color: var(--muted);
    transition: color 0.2s;
  }
  
  .copy-link:hover {
    color: var(--text);
    border-color: var(--text);
  }
  
  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 1.5rem;
  }
  
  .card {
    border: 1px solid var(--border);
    padding: 1.5rem;
    border-radius: 4px;
  }
  
  .card h4 {
    margin-bottom: 0.75rem;
  }
  
  .card-body {
    margin-bottom: 1rem;
    color: var(--muted);
  }
  
  .deliverables {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  
  .deliverables li {
    padding: 0.25rem 0;
    padding-left: 1.25rem;
    position: relative;
  }
  
  .deliverables li::before {
    content: "•";
    position: absolute;
    left: 0;
    color: var(--muted);
  }
  
  .accordion {
    border: 1px solid var(--border);
    border-radius: 4px;
    overflow: hidden;
  }
  
  .accordion-item {
    border-bottom: 1px solid var(--border);
  }
  
  .accordion-item:last-child {
    border-bottom: none;
  }
  
  .accordion-header {
    padding: 1rem 1.5rem;
    background: none;
    border: none;
    width: 100%;
    text-align: left;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: background-color 0.2s;
  }
  
  .accordion-header:hover {
    background: var(--border);
  }
  
  .accordion-icon {
    transition: transform 0.2s;
  }
  
  .accordion-icon.expanded {
    transform: rotate(90deg);
  }
  
  .accordion-content {
    padding: 0 1.5rem;
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-out, padding 0.3s ease-out;
  }
  
  .accordion-content.expanded {
    padding: 1rem 1.5rem;
    max-height: 500px;
  }
  
  .process-steps {
    list-style: none;
    padding: 0;
    margin: 0;
    counter-reset: step;
  }
  
  .process-step {
    padding: 0.75rem 0;
    padding-left: 2rem;
    position: relative;
    counter-increment: step;
  }
  
  .process-step::before {
    content: counter(step);
    position: absolute;
    left: 0;
    width: 1.5rem;
    height: 1.5rem;
    border: 1px solid var(--text);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 0.875rem;
    font-weight: 500;
  }
  
  .resources {
    margin-bottom: 3rem;
  }
  
  .resource-list {
    display: grid;
    gap: 1rem;
  }
  
  .resource {
    border: 1px solid var(--border);
    padding: 1rem;
    border-radius: 4px;
  }
  
  .resource-header {
    display: flex;
    justify-content: space-between;
    align-items: start;
    margin-bottom: 0.5rem;
  }
  
  .resource-title {
    font-weight: 500;
    text-decoration: none;
    color: var(--text);
  }
  
  .resource-title:hover {
    text-decoration: underline;
  }
  
  .resource-kind {
    font-size: 0.75rem;
    text-transform: uppercase;
    padding: 0.125rem 0.5rem;
    border: 1px solid var(--border);
    border-radius: 999px;
    color: var(--muted);
  }
  
  .resource-notes {
    color: var(--muted);
    font-size: 0.875rem;
  }
  
  .cta {
    text-align: center;
    padding: 3rem 2rem;
    border: 1px solid var(--border);
    border-radius: 4px;
    background: var(--border);
  }
  
  .cta h2 {
    font-size: 1.75rem;
    margin-bottom: 0.5rem;
  }
  
  .cta-subhead {
    color: var(--muted);
    margin-bottom: 1.5rem;
  }
</style>

<div class="enablement-container">
  <nav class="toc toc-desktop" aria-label="Table of contents">
    <h3>On this page</h3>
    <ul class="toc-list">
      {#each tocSections as section}
        <li class="toc-item level-{section.level}">
          <a href="#{section.id}" class="toc-link" class:active={currentHash === section.id}>
            {section.title}
          </a>
          {#if section.items}
            <ul class="toc-sublist">
              {#each section.items as item}
                <li class="toc-item level-{item.level}">
                  <a href="#{item.id}" class="toc-link" class:active={currentHash === item.id}>
                    {item.title}
                  </a>
                </li>
              {/each}
            </ul>
          {/if}
        </li>
      {/each}
    </ul>
  </nav>
  
  <div class="toc-mobile">
    <details>
      <summary style="padding: 0.5rem; border: 1px solid var(--border); border-radius: 4px; cursor: pointer;">
        On this page
      </summary>
      <ul class="toc-list" style="margin-top: 0.5rem;">
        {#each tocSections as section}
          <li class="toc-item level-{section.level}">
            <a href="#{section.id}" class="toc-link">
              {section.title}
            </a>
          </li>
        {/each}
      </ul>
    </details>
  </div>
  
  <main>
    <section class="hero">
      <h1>{enablement.hero.title}</h1>
      <p class="hero-subtitle">{enablement.hero.subtitle}</p>
      <div class="hero-actions">
        <a href={enablement.hero.primary_cta.href} class="btn btn-primary">
          {enablement.hero.primary_cta.label}
        </a>
        <a href={enablement.hero.secondary_cta.href} class="btn btn-secondary">
          {enablement.hero.secondary_cta.label}
        </a>
      </div>
    </section>
    
    <section class="value-props">
      {#each enablement.value_props as prop}
        <div class="value-prop" id={prop.id}>
          <h3>{prop.title}</h3>
          <ul>
            {#each prop.bullets as bullet}
              <li>{bullet}</li>
            {/each}
          </ul>
        </div>
      {/each}
    </section>
    
    {#each enablement.sections as section}
      <section class="section" id={section.id}>
        <div class="section-header">
          <h2 class="section-title">{section.title}</h2>
          <button class="copy-link" on:click={() => copyLink(section.id)} title="Copy link to section">
            Copy link
          </button>
        </div>
        
        {#if section.type === 'cards'}
          <div class="cards">
            {#each section.cards as card}
              <div class="card">
                <h4>{card.title}</h4>
                <p class="card-body">{card.body}</p>
                {#if card.deliverables}
                  <ul class="deliverables">
                    {#each card.deliverables as deliverable}
                      <li>{deliverable}</li>
                    {/each}
                  </ul>
                {/if}
              </div>
            {/each}
          </div>
        {/if}
        
        {#if section.type === 'text'}
          {#each section.body as paragraph}
            <p>{@html paragraph.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</p>
          {/each}
        {/if}
        
        {#if section.type === 'bullets'}
          <ul>
            {#each section.bullets as bullet}
              <li>{@html bullet.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>
            {/each}
          </ul>
        {/if}
        
        {#if section.type === 'accordion'}
          {#if section.intro}
            <p>{section.intro}</p>
          {/if}
          <div class="accordion">
            {#each section.items as item, idx}
              {@const itemId = `${section.id}-${idx}`}
              <div class="accordion-item">
                <button 
                  class="accordion-header"
                  id={itemId}
                  on:click={() => toggleSection(itemId)}
                >
                  <span>{item.label}</span>
                  <span class="accordion-icon" class:expanded={expandedSections[itemId]}>
                    ▶
                  </span>
                </button>
                <div class="accordion-content" class:expanded={expandedSections[itemId]}>
                  <ul>
                    {#each item.content as line}
                      <li>{@html line.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')}</li>
                    {/each}
                  </ul>
                </div>
              </div>
            {/each}
          </div>
        {/if}
        
        {#if section.type === 'process'}
          <ol class="process-steps">
            {#each section.steps as step}
              <li class="process-step">{step}</li>
            {/each}
          </ol>
        {/if}
      </section>
    {/each}
    
    {#if enablement.resources?.length}
      <section class="resources">
        <h2>Resources</h2>
        <div class="resource-list">
          {#each enablement.resources as resource}
            <div class="resource">
              <div class="resource-header">
                <a href={resource.url} class="resource-title" target="_blank" rel="noopener noreferrer">
                  {resource.title}
                </a>
                <span class="resource-kind">{resource.kind}</span>
              </div>
              {#if resource.notes}
                <p class="resource-notes">{resource.notes}</p>
              {/if}
            </div>
          {/each}
        </div>
      </section>
    {/if}
    
    {#if enablement.cta}
      <section class="cta">
        <h2>{enablement.cta.headline}</h2>
        <p class="cta-subhead">{enablement.cta.subhead}</p>
        <div class="hero-actions" style="justify-content: center;">
          {#each enablement.cta.actions as action}
            <a href={action.href} class="btn btn-primary">
              {action.label}
            </a>
          {/each}
        </div>
      </section>
    {/if}
  </main>
</div>
````

## File: src/routes/enablement/+page.ts
````typescript
import enablementData from '$lib/data/enablement.json';

export const prerender = true;

export async function load() {
  // Import data directly for prerendering
  // External consumers still use /data/enablement.json endpoint
  return {
    enablement: enablementData
  };
}
````

## File: src/routes/+page.ts
````typescript
import type { PageLoad } from './$types';
import resumeData from '$lib/data/resume.json';

export const prerender = true;

export const load: PageLoad = async () => {
  // Import data directly for prerendering
  // External consumers still use /data/resume.json endpoint
  return { resume: resumeData };
};
````

## File: ARCHITECTURE.md
````markdown
# Austin Wallace Resume Site — Architecture

## Overview

A multi‑framework deployment with a single CloudFront entry (via SST Router).  
SvelteKit serves canonical pages and **SSR-only** variant host pages; the variants themselves are **static HTML**.

```
┌───────────────────────────────────────────────┐
│      CloudFront (SST Router)                 │
│   d2li8p8xclq49l.cloudfront.net / custom domain│
└───────────────┬───────────────┬───────────────┘
                │               │
  ┌──────▼──────┐    ┌─────▼─────┐  ┌──────────┐
  │  SvelteKit  │    │  Next.js  │  │ TanStack │
  │    (AWS)    │    │  (Vercel) │  │ (Netlify)│
  │  + /data    │    └────────────┘  └──────────┘
  │  + SSR /with│         ┌────────────┐
  │             │         │ React (SWA)│
  └──────────────┘        └────────────┘
```

## Key decisions

- **/with/** routes are **SSR-only** host pages to guarantee **clean URLs** (`/with/claude-code`) without edge rewrites.  
  These pages simply render an iframe that points at static variant HTML under `/variants/<tool>/...`.
- **Variants are static** (`/variants/<tool>/index.html`), highly cacheable, and easy to validate.
- **Data** is centralized under `/data/*.json` with **ETag** + **open CORS**, consumed by all variants.

## Routing

- **SvelteKit mounted at Router root**
  - `/` (resume), `/enablement` (enablement) — Svelte pages
  - `/with/<tool>[/enablement]` — SSR wrappers (no prerender)
  - `/variants/<tool>[/enablement]/index.html` — static bundles
  - `/data/*.json` — JSON endpoints
- **External apps via prefixes**
  - `/azure/next` → Next.js (Vercel/App Service)
  - `/azure/react` → React (Azure SWA with rewrites)
  - `/gcp/tanstack` → TanStack (Netlify with redirects)

## Why SSR for `/with/*`

CloudFront/SST won't automatically serve `/with/foo/index.html` for `/with/foo`.  
Two valid fixes:
1) **SSR wrapper** (chosen): simple, no edge code, clean URLs.  
2) CloudFront **viewer‑request rewrite** to `/index.html` (pure static, more moving pieces).

## Data architecture

- Source of truth in `src/lib/data/*.json`
- Served via SvelteKit endpoints with:
  - `ETag`
  - `Cache-Control: public, max-age=3600, s-maxage=86400, stale-while-revalidate=86400`
  - `Access-Control-Allow-Origin: *`
- All variants fetch these endpoints at runtime.

## SEO & security

- `robots.txt`: `Disallow: /with/`
- Variant hosts add `<meta name="robots" content="noindex, nofollow">`
- Variants are sandboxed iframes:
  `allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox`

## Performance

- Canonical pages and static variants are cache‑friendly.
- SSR hosts for `/with/*` are lightweight; initial render only. Client navigations are SPA‑fast.
- (Optional) Add short `s-maxage` for `/with/*` if you want edge caching of the SSR wrapper.

## Router configuration (concept)

- Mount SvelteKit at Router root (don't forward to `site.url`).
- Prefix routes to external apps with basePath/rewrites configured in each app.
- Avoid CloudFront→CloudFront forwarding loops.

## Gotchas

- **Do not** add `"/*": site.url` to Router routes (causes 403/loop).
- Ensure each external app uses the correct base path and static redirects (Next `basePath`, SWA `staticwebapp.config.json`, Netlify `redirects`).

## Alternatives considered

- **Pure SSG with a viewer‑request rewrite** (no SSR at all for `/with/*`): valid but adds edge code.
- **Keep prerender + allow SSR fallback**: also works; current code chose "SSR‑only" for simpler behavior and docs.
````

## File: CLAUDE.md
````markdown
# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run dev          # Start development server at localhost:5173
npm run build        # Build for production
npm run preview      # Preview production build locally
npm run check        # Type-check Svelte components
npm run validate:variants  # Validate all HTML variants
```

### Deployment
```bash
# Deploy to production (requires AWS credentials)
AWS_PROFILE=prod npx sst deploy --stage production

# Unlock deployment if locked
AWS_PROFILE=prod npx sst unlock --stage production
```

## Architecture

### Multi-Variant Resume Platform
The site displays the same resume content styled by different AI tools. Each variant runs in an isolated iframe to prevent CSS/JS conflicts.

**Key Components:**
- **Providers System** (`src/lib/providers.ts`): Central registry of AI tool variants with metadata (id, name, path, icon, color)
- **VariantFrame** (`src/lib/components/VariantFrame.svelte`): Manages iframe isolation and PostMessage height communication
- **Data Layer** (`src/lib/data/*.json`): Centralized JSON files served via `/data/*.json` endpoints

### Route Structure
```
/                           # Minimal/canonical resume
/enablement                 # AI enablement content
/with/[tool]               # Tool-specific resume variant
/with/[tool]/enablement    # Tool-specific enablement variant
/data/*.json               # ETag data endpoints (same-origin via Router)
```

### Variant System
Variants are static HTML files in `/static/variants/[tool-name]/` that must:
1. Fetch data from `/data/resume.json` or `/data/enablement.json`
2. Be self-contained with all assets
3. (Optional) Post height updates — the app uses fixed-height iframes by default and ignores height messages unless `autosize` is enabled in `VariantFrame`.

Note: When variants are hosted on separate origins and mounted under subpaths via the SST Router (e.g., `/azure/react`, `/gcp/tanstack`), ensure the app is built with that base path and the host is configured to rewrite `/<prefix>/assets/*` → `/assets/*` so asset URLs resolve correctly behind CloudFront.

## Routing Fix Progress (2025-09-05)

- Implemented subpath-safe configs for all external variants:
  - Next.js: `basePath: '/azure/next'` with conditional `output: 'standalone'` (Azure).
  - React (SWA): `vite.base = '/azure/react/'` and `staticwebapp.config.json` with asset rewrite and `forwardingGateway.allowedForwardedHosts`.
  - TanStack: `vite.base = '/gcp/tanstack/'` and Netlify redirects for SPA + assets.
- Hardened deploy scripts to run `npm ci` and fail fast on missing SWA config.

Next steps:
- Deploy each variant (Azure SWA, Azure App Service or Vercel, Netlify/Cloud Run) and verify through CloudFront.
- Run `./scripts/test-routes.sh "https://d2li8p8xclq49l.cloudfront.net"` to confirm headers and 200s.
- If Azure SWA shows host-related redirects, confirm the added `forwardingGateway.allowedForwardedHosts` is active in the deployed config.

### SST Deployment Configuration
- **Domain**: www.austinwallace.ca (CloudFront + ACM certificate)
- **DNS**: External management via GoDaddy
- **Certificate ARN**: `arn:aws:acm:us-east-1:737679990662:certificate/061f07dc-2e1e-4751-bfee-e7e26c8b7c80`

## Next.js Variant (Vercel) — Production Notes

The Next.js deployment mounted at `/azure/next` is configured for stability behind CloudFront:

- **SSR resume:** `/azure/next/resume` renders server‑side and hydrates cleanly through CF. This is the canonical resume route for the Next app.
- **Root redirect:** `/azure/next` redirects to `/azure/next/resume` (configured in `variants/nextjs-azure/next.config.mjs`). Keep this for a clean landing.
- **Data origin:** Set `NEXT_DATA_ORIGIN=https://d2li8p8xclq49l.cloudfront.net` in the Vercel project so direct Vercel hits can fetch `/data/*` through the Router.
- **Logos:** Provider logos are copied into `variants/nextjs-azure/public/logos/*` to avoid 404s when the sidebar renders.

### Debug routes (kept, noindex)
- `/azure/next/test` — minimal hydration sanity check.
- `/azure/next/probe` — prints SSR vs client "fingerprint" diffs to console to catch env/host/basePath mismatches.

Both routes are marked `noindex` and intended for diagnostics. You can remove them or gate with an env flag later.

## React Variant (Azure SWA) — Production Notes

- **Base path:** Built with `vite.base = '/azure/react/'` and SWA rewrites for assets.
- **Canonical resume:** `/azure/react/resume` renders the minimal resume. The app router redirects `/azure/react/` → `/azure/react/resume` client-side, and SWA issues a server 308 for `/azure/react` → `/azure/react/resume`.
- **SWA config:** See `variants/react-azure/staticwebapp.config.json` — includes:
  - 308 redirect for `/azure/react` → `/azure/react/resume`
  - Asset rewrites `/azure/react/assets/*` → `/assets/*`
  - Forwarded hosts allow-list includes CloudFront and `www.austinwallace.ca`.

## TanStack Variant (Netlify) — Production Notes

- **Base path:** Built with `vite.base = '/gcp/tanstack/'`.
- **Canonical resume:** `/gcp/tanstack/resume` renders the minimal resume. Root `/gcp/tanstack` is redirected at Netlify with a 308.
- **Netlify redirects:** See `variants/tanstack-gcp/netlify.toml` — includes:
  - 308 redirect for `/gcp/tanstack` → `/gcp/tanstack/resume`
  - SPA rewrites: `/gcp/tanstack/*` → `/index.html` (200)
  - Asset passthroughs for `/gcp/tanstack/assets/*` and `/gcp/tanstack/variants/*`.

## Adding New Variants

1. Create HTML file in `/static/variants/[tool-name]/index.html`
2. Add provider entry to `src/lib/providers.ts`:
   ```typescript
   { id: 'tool-name', name: 'Tool Name', path: '/variants/tool-name/index.html', icon: '🔧', color: '#hex' }
   ```
3. Validate with `npm run validate:variants`
4. Test locally with `npm run dev`

## Navigation Context
The layout maintains provider context - clicking "AI Enablement" while viewing Claude Code variant navigates to `/with/claude-code/enablement`, not `/enablement`.

### Variant‑preserving Deploy Navigation
On `/with/*` routes the sidebar defaults to "Deploy Variants". Clicking a deployment entry opens a new tab and deep‑links into the external app using app routes:
- Non‑minimal: `/<prefix>/with/<tool>[/enablement]`
- Minimal: the deployment app root at `/<prefix>`

## Content Updates
Edit JSON files in `src/lib/data/` — the API endpoints `/data/resume.json` and `/data/enablement.json` will reflect changes across all variants.

## Generating Repomix for Context

To create a comprehensive repomix with ~60k tokens for sharing project context:

```bash
# Generate repomix with token count
npx repomix@latest --token-count-encoding cl100k_base

# Or with specific options
npx repomix@latest \
  --token-count-encoding cl100k_base \
  --output repomix-60k.md \
  --style markdown
```

### Current Repomix Configuration
The `repomix.config.json` is configured to:
- Include key source files from main app and deployment variants
- Include configuration files and deployment scripts
- Include all markdown documentation
- Exclude build artifacts, node_modules, and generated files
- Target ~60k tokens for comprehensive context

### Files Included in Repomix
- **Main SvelteKit app**: Routes, layouts, providers, components
- **Deployment variants**: Layout components and key files from Next.js, React, and TanStack
- **Configuration**: SST config, package.json, deployment configs
- **Scripts**: All deployment and sync scripts
- **Documentation**: All .md files including architecture guides

### Token Distribution (typical)
- ~9% - Main app routes and layouts
- ~15% - Deployment variant layouts
- ~10% - Documentation and guides
- ~8% - Configuration files
- ~5% - Deployment scripts
- ~53% - Other source files and components

This creates a complete context snapshot for AI assistants to understand the entire architecture.
````

## File: package.json
````json
{
  "name": "austin-site",
  "version": "0.0.1",
  "private": true,
  "type": "module",
  "scripts": {
    "build": "vite build",
    "check": "svelte-kit sync && svelte-check --tsconfig ./tsconfig.json",
    "dev": "vite dev",
    "preview": "vite preview",
    "validate:variants": "node scripts/validate-variant.mjs"
  },
  "devDependencies": {
    "@sveltejs/adapter-static": "^3.0.9",
    "@sveltejs/kit": "^2.37.0",
    "@sveltejs/vite-plugin-svelte": "^6.1.3",
    "@types/node": "^24.3.0",
    "cheerio": "^1.1.2",
    "html-validate": "^10.0.0",
    "sst": "^3.17.10",
    "svelte": "^5.38.6",
    "svelte-check": "^4.3.1",
    "tslib": "^2.8.1",
    "typescript": "^5.9.2",
    "vite": "^7.1.3"
  },
  "dependencies": {
    "sst": "3.17.10",
    "svelte-kit-sst": "2.43.5"
  }
}
````

## File: README.md
````markdown
# Austin Site — AI‑Variant Resume & Enablement

A SvelteKit site that renders the same content through multiple **AI‑styled variants**.  
Each variant is a static HTML bundle rendered in a sandboxed **iframe**, fed from shared JSON.

---

## Quick mental model (TL;DR)

- **Canonical pages** (`/` and `/enablement`) are Svelte pages.
- **Variant host pages** (`/with/<tool>` and `/with/<tool>/enablement`) are **SSR-only wrappers**.  
  They exist purely to give you **clean URLs** and then iframe static variant HTML.
- **Actual variants are static** files at `/variants/<tool>/index.html` (and `/enablement/index.html`).
- **Data** comes from `/data/*.json` endpoints with ETag. No CORS is required when accessed through the CloudFront Router (same-origin). Use simple dev proxies/rewrites for local apps.
- **Deploy variants** (Next.js/React/TanStack) are separate apps behind CloudFront prefixes and deep-link correctly.

> Why SSR for `/with/*`? CloudFront/SST does not auto-map a directory URL to `index.html`. SSR guarantees that `/with/claude-code` returns `200` without adding CDN rewrite logic.

---

## Routes

### Canonical (SvelteKit)
- `/` — Minimal/canonical resume
- `/enablement` — AI enablement content

### Variant hosts (SSR wrappers; **no prerender**)
- `/with/<tool>` — iframes `/variants/<tool>/index.html`
- `/with/<tool>/enablement` — iframes `/variants/<tool>/enablement/index.html`

> These routes are **not indexed** (robots + page meta). They just host the variant frames and preserve clean URLs.

### Static variant files
- `/variants/<tool>/index.html`
- `/variants/<tool>/enablement/index.html`

### Data API (ETag)
- `/data/resume.json`
- `/data/enablement.json`

### External deployments (behind CloudFront via SST Router)
- `/azure/next/...` → Next.js (Vercel/App Service style)
- `/azure/react/...` → React (Azure Static Web Apps)
- `/gcp/tanstack/...` → TanStack (Netlify)

#### Next.js (Vercel) specifics
- Canonical resume route is **SSR** at `/azure/next/resume` (stable hydration behind CF).
- App root `/azure/next` redirects to `/azure/next/resume` (configured in the Next app).
- Vercel env should include `NEXT_DATA_ORIGIN=https://d2li8p8xclq49l.cloudfront.net` so direct Vercel hits fetch `/data/*` via CloudFront Router.
- Provider logos live in `variants/nextjs-azure/public/logos/*` to avoid 404s when rendering the sidebar.
- Debug routes (kept, noindex):
  - `/azure/next/test` — simple hydration check
  - `/azure/next/probe` — logs SSR vs client fingerprint diffs in console

#### React (Azure SWA) specifics
- Canonical resume route is `/azure/react/resume`.
- Root `/azure/react` redirects with 308 to `/azure/react/resume` (SWA `staticwebapp.config.json`).
- SPA base `vite.base = '/azure/react/'`; asset rewrites map `/azure/react/assets/*` to `/assets/*`.

#### TanStack (Netlify) specifics
- Canonical resume route is `/gcp/tanstack/resume`.
- Root `/gcp/tanstack` redirects with 308 to `/gcp/tanstack/resume` (Netlify `netlify.toml`).
- SPA base `vite.base = '/gcp/tanstack/'`; SPA fallback for `/gcp/tanstack/*` → `/index.html` (200).


---

## Why `/with/*` is SSR-only

- **Goal:** Direct access to `/with/claude-code` (no `.html`) must return `200`.
- **Observation:** SST/CloudFront won't automatically serve `/with/claude-code/index.html` for `/with/claude-code`.
- **Solution:** Handle `/with/*` via SSR; the page simply renders an iframe pointing at the static variant file.  
  Minimal server work, clean URL, consistent behavior.

**Code changes that implement this**
```ts
// svelte.config.js
// Removed prerender of /with/* entries
prerender: {
  entries: ['*'] // no explicit /with/* entries
}

// src/routes/with/[tool]/+page.ts
export const prerender = false;

// src/routes/with/[tool]/enablement/+page.ts
export const prerender = false;
```

## Data flow
- SvelteKit serves JSON via `/data/*.json` with ETag; behind the Router these are same-origin for external apps.
- Variant HTML (static) fetches the JSON and renders.
- Variant host pages just iframe the static HTML (no heavy logic).

## Deploy variants & deep linking
From any `/with/<tool>` page, you can open the same variant in an external deployment:
- **Next.js (Vercel):** `/azure/next/with/<tool>`
- **React (Azure SWA):** `/azure/react/with/<tool>`
- **TanStack (Netlify):** `/gcp/tanstack/with/<tool>`

These are configured via the SST Router and each app's basePath/rewrites.

## Security & SEO
Variants run in a sandboxed iframe:
`allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox`

- `robots.txt` `Disallow: /with/` — prevents indexing of variant host pages.
- Variant host pages also add `<meta name="robots" content="noindex, nofollow" />`.

## Local development
```bash
npm run dev
```

## Validation
Run a simple validator on variant HTML (checks semantics, data fetch, etc.):
```bash
npm run validate:variants
```

## Deployment (high-level)
1. Sync variants into framework apps:
   ```bash
   ./scripts/sync-variants.sh
   ```
2. Deploy framework apps (Vercel, Azure SWA, Netlify).
3. Deploy SST Router + SvelteKit (AWS):
   ```bash
   AWS_PROFILE=prod npx sst deploy --stage production
   ```
   The Router mounts SvelteKit at `/` and routes `/azure/next`, `/azure/react`, `/gcp/tanstack` to the external apps.

## Testing & troubleshooting
```bash
# Clean URLs for variant hosts (SSR)
curl -I https://<your-cloudfront>/with/claude-code              # expect 200
curl -I https://<your-cloudfront>/with/claude-code/enablement    # expect 200

# Static variant files (SSG)
curl -I https://<your-cloudfront>/variants/claude-code/index.html              # 200
curl -I https://<your-cloudfront>/variants/claude-code/enablement/index.html   # 200

# Data endpoints (CORS + ETag)
curl -I https://<your-cloudfront>/data/resume.json
curl -I https://<your-cloudfront>/data/enablement.json
```

**Gotcha to avoid:** Do not route the Router to the site's internal CloudFront origin (`"/*": site.url`).  
Mount the SvelteKit app on the Router instance instead.

## Variant contract
A variant is just static HTML (plus its own assets). It must:
- Fetch `/data/resume.json` or `/data/enablement.json`
- Keep assets within its own folder
- Open external links safely (`target="_blank"` + `rel="noopener noreferrer"`)

## License
MIT
````

## File: svelte.config.js
````javascript
import adapter from 'svelte-kit-sst';

// Known AI variant IDs (keep in sync with src/lib/providers.ts; exclude 'minimal')
const variantIds = [
  'claude-code',
  'gpt-5-pro',
  'gpt-5-thinking',
  'lovable',
  'bolt',
  'firebase',
];

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    adapter: adapter(),
    prerender: { 
      entries: [
        '*',
        // Note: /with/* routes are handled by SSR to support direct URL access
        // SST doesn't correctly serve prerendered files without .html extension
      ],
      handleHttpError: ({ path, referrer, message }) => {
        // Ignore 404 errors for external routes that will be handled by SST Router
        if (path.startsWith('/azure/') || path.startsWith('/gcp/') || path.startsWith('/variants/')) {
          return;
        }
        
        // Throw error for other cases
        throw new Error(message);
      },
      handleMissingId: ({ path, id, referrers }) => {
        // Ignore missing ID warnings for now
        console.warn(`Missing ID "${id}" on ${path} referenced by: ${referrers.join(', ')}`);
      }
    }
  }
};

export default config;
````

## File: src/routes/with/[tool]/+page.svelte
````
<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { PROVIDERS } from '$lib/providers';
  import VariantFrame from '$lib/components/VariantFrame.svelte';

  export let data: { provider: any; providers: typeof PROVIDERS };

  // Make these reactive to route param changes
  $: p = data.provider;
  $: providers = data.providers;
  $: idx = providers.findIndex((x) => x.id === p?.id);

  // Standard max width for all variants
  const frameMax = 2000;

  function navigate(id: string) {
    goto(id === 'minimal' ? '/' : `/with/${id}`);
  }

  // Keyboard: [ ] to cycle through variants
  function onKey(e: KeyboardEvent) {
    if (!p) return;
    if (e.key === ']') {
      const next = providers[(idx + 1) % providers.length];
      navigate(next.id);
    } else if (e.key === '[') {
      const prev = providers[(idx - 1 + providers.length) % providers.length];
      navigate(prev.id);
    }
  }

  onMount(() => {
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  });
</script>

<svelte:head>
  {#if p?.noindex}<meta name="robots" content="noindex, nofollow" />{/if}
  {#if p?.path}<link rel="prefetch" href={p.path} />{/if}
</svelte:head>

{#if !p}
  <div style="text-align: center; padding: 3rem;">
    <h1>Unknown provider</h1>
    <p>This variant doesn't exist yet.</p>
    <a href="/" style="color: var(--accent);">← Back to minimal version</a>
  </div>
{:else}
  {#if p.id === 'minimal'}
    <p style="text-align: center; padding: 2rem; color: var(--muted);">
      This route is for AI-generated variants. The minimal version is shown on the home page.
    </p>
  {:else}
    <!-- Fixed-height wrapper: iframe scrollbars are OK -->
    <div style="position: relative; height: calc(100vh - 200px); min-height: 600px;">
      {#key p.id}
        <VariantFrame src={p.path} maxWidth={frameMax} autosize={false} />
      {/key}
    </div>
    <p style="text-align: center; margin-top: 1rem; color: var(--muted); font-size: 0.85rem;">
      Tip: Use [ and ] keys to cycle through variants
    </p>
  {/if}
{/if}
````

## File: sst.config.ts
````typescript
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "austin-site",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: { aws: { region: "us-east-1" } },
    };
  },
  async run() {
    // 1) One CloudFront+domain for everything via Router
    // Temporarily disabled - domain is still attached to old CloudFront
    // Update GoDaddy DNS to point to: d2li8p8xclq49l.cloudfront.net
    const router = new sst.aws.Router("Edge", {
      domain: {
        name: "www.austinwallace.ca",
        // redirects: ["austinwallace.ca"], // Another CloudFront has this, handle separately
        dns: false, // We'll manage DNS in GoDaddy
        cert: "arn:aws:acm:us-east-1:737679990662:certificate/061f07dc-2e1e-4751-bfee-e7e26c8b7c80"
      }
    });

    // 2) Keep your SvelteKit site at `/` (root)
    const site = new sst.aws.SvelteKit("AustinSite", {
      router: { instance: router }, // Mount at root of the same Router
      environment: {
        PUBLIC_STAGE: $app.stage,
        PUBLIC_ROUTER_URL: router.url, // Expose router URL for convenience
      }
    });

    // 3) Do NOT add an explicit /data route.
    // The SvelteKit site is mounted at root on the same Router, so /data is served by the site directly.
    // An explicit route to site.url would forward to the site's CloudFront domain and trigger its 403 guard.

    // 4) External apps - actual deployed URLs with warnings
    const AZURE_NEXT_ORIGIN = 
      process.env.AZURE_NEXT_ORIGIN ?? "https://austin-site-seven.vercel.app";
    const AZURE_REACT_ORIGIN = 
      process.env.AZURE_REACT_ORIGIN ?? "https://gray-pebble-049c9b91e.1.azurestaticapps.net";
    const GCP_TANSTACK_ORIGIN = 
      process.env.GCP_TANSTACK_ORIGIN ?? "https://austin-site.netlify.app";
    
    // Warn when using defaults
    if (!process.env.AZURE_NEXT_ORIGIN) {
      console.warn("⚠️  Using default AZURE_NEXT_ORIGIN. Set env var to override.");
    }
    if (!process.env.AZURE_REACT_ORIGIN) {
      console.warn("⚠️  Using default AZURE_REACT_ORIGIN. Set env var to override.");
    }
    if (!process.env.GCP_TANSTACK_ORIGIN) {
      console.warn("⚠️  Using default GCP_TANSTACK_ORIGIN. Set env var to override.");
    }

    // Path prefixes - SST Router uses startsWith matching, no wildcards needed
    router.route("/azure/next", AZURE_NEXT_ORIGIN);
    // React (Azure SWA): rewrite the prefixed path to root since SWA serves from root
    router.route("/azure/react/assets", AZURE_REACT_ORIGIN, {
      rewrite: { regex: "^/azure/react/assets/(.*)$", to: "/assets/$1" }
    });
    router.route("/azure/react", AZURE_REACT_ORIGIN, {
      rewrite: { regex: "^/azure/react/(.*)$", to: "/$1" }
    });
    router.route("/gcp/tanstack", GCP_TANSTACK_ORIGIN);

    // Optional: Add redirects for convenience (removed due to SST bug)
    
    return {
      url: router.url,          // single domain for everything
      sveltekit: site.url,      // SvelteKit origin (also root)
      variants: {
        azure_next: AZURE_NEXT_ORIGIN,
        azure_react: AZURE_REACT_ORIGIN,
        gcp_tanstack: GCP_TANSTACK_ORIGIN,
      }
    };
  },
});
````

## File: src/lib/components/VariantFrame.svelte
````
<script lang="ts">
  import { onMount, onDestroy } from 'svelte';

  export let src: string;

  /**
   * Fixed-height mode (default): the iframe fills its wrapper.
   * We keep an optional autosize path in case you ever want it back,
   * but it's OFF by default and we ignore variant postMessages.
   */
  export let autosize = false;

  /** Optional max content width in pixels (centered). If null => full width. */
  export let maxWidth: number | null = null;

  // Internal height string used only when autosize === true
  let heightCss = '100%';
  let lastH = 0;

  function onMessage(e: MessageEvent) {
    if (!autosize) return;
    const d = e?.data as any;
    if (!d || typeof d !== 'object') return;
    if (d.type === 'variant:height') {
      const h = Number(d.value);
      if (!Number.isNaN(h) && h > 300 && Math.abs(h - lastH) > 2) {
        lastH = h;
        heightCss = `${h}px`;
      }
    }
  }

  onMount(() => {
    if (autosize) window.addEventListener('message', onMessage);
  });
  onDestroy(() => {
    if (autosize) window.removeEventListener('message', onMessage);
  });
</script>

<style>
  .frame-wrap { 
    display: block; 
    width: 100%; 
    height: 100%; /* wrapper needs height too */
  }
  .frame {
    display: block;
    width: 100%;
    height: 100%; /* fixed-height mode: fill wrapper */
    border: none;
    background: #fff;
  }
</style>

<div
  class="frame-wrap"
  style={`max-width:${maxWidth ? maxWidth + 'px' : '100%'}; margin-inline:auto;`}
>
  <iframe
    title="Variant preview"
    {src}
    class="frame"
    loading="lazy"
    sandbox="allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox"
    style={`height:${autosize ? heightCss : '100%'};`}
  ></iframe>
</div>
````

## File: src/routes/with/[tool]/enablement/+page.svelte
````
<script lang="ts">
  import VariantFrame from '$lib/components/VariantFrame.svelte';
  
  export let data: any;
  
  // Reactive so it updates on param changes
  $: provider = data.provider;
  $: tool = data.tool;
  $: variantPath = `/variants/${tool}/enablement/index.html`;

  const frameMax = 2000;
</script>

<svelte:head>
  {#if provider?.name}
    <title>AI Enablement - {provider.name} Variant</title>
  {/if}
</svelte:head>

{#key tool}
  <!-- Fixed-height wrapper: keeps the variant's viewport stable; scrollbars inside iframe -->
  <div style="position: relative; height: calc(100vh - 200px); min-height: 600px;">
    <VariantFrame src={variantPath} maxWidth={frameMax} autosize={false}/>
  </div>
{/key}
````

## File: static/variants/claude-code/index.html
````html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Resume - Claude Code Variant</title>
  <style>
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    :root {
      --claude-primary: #D97706;
      --claude-secondary: #F59E0B;
      --claude-accent: #FCD34D;
      --text-primary: #111827;
      --text-secondary: #6B7280;
      --bg-primary: #FFFFFF;
      --bg-secondary: #F9FAFB;
      --border: #E5E7EB;
      --success: #10B981;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif;
      color: var(--text-primary);
      background: var(--bg-primary);
      line-height: 1.6;
    }
    
    #app-claude-code {
      max-width: 900px;
      margin: 0 auto;
      padding: 2rem;
      animation: fadeIn 0.5s ease-out;
    }
    
    @keyframes fadeIn {
      from { opacity: 0; transform: translateY(10px); }
      to { opacity: 1; transform: translateY(0); }
    }
    
    .header {
      border-bottom: 3px solid var(--claude-primary);
      padding-bottom: 1.5rem;
      margin-bottom: 2rem;
    }
    
    .name {
      font-size: 2.5rem;
      font-weight: 800;
      background: linear-gradient(135deg, var(--claude-primary), var(--claude-secondary));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      background-clip: text;
      margin-bottom: 0.5rem;
    }
    
    .title {
      font-size: 1.25rem;
      color: var(--text-secondary);
      margin-bottom: 1rem;
    }
    
    .contact-info {
      display: flex;
      flex-wrap: wrap;
      gap: 1.5rem;
      list-style: none;
    }
    
    .contact-item {
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .contact-icon {
      width: 20px;
      height: 20px;
      color: var(--claude-primary);
    }
    
    .contact-item a {
      color: var(--text-primary);
      text-decoration: none;
      transition: color 0.2s;
    }
    
    .contact-item a:hover {
      color: var(--claude-primary);
    }
    
    .section {
      margin-bottom: 2.5rem;
      padding: 1.5rem;
      background: var(--bg-secondary);
      border-radius: 12px;
      border: 1px solid var(--border);
      position: relative;
      overflow: hidden;
    }
    
    .section::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      height: 3px;
      background: linear-gradient(90deg, var(--claude-primary), var(--claude-secondary));
    }
    
    .section-title {
      font-size: 1.125rem;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.05em;
      color: var(--claude-primary);
      margin-bottom: 1rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;
    }
    
    .section-icon {
      font-size: 1.25rem;
    }
    
    .summary {
      color: var(--text-secondary);
      line-height: 1.8;
      max-width: 70ch;
    }
    
    .experience-item {
      margin-bottom: 1.5rem;
      padding-left: 1.5rem;
      border-left: 2px solid var(--claude-primary);
    }
    
    .experience-header {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-wrap: wrap;
      gap: 1rem;
      margin-bottom: 0.5rem;
    }
    
    .experience-title {
      font-weight: 700;
      color: var(--text-primary);
    }
    
    .experience-company {
      color: var(--claude-primary);
      font-weight: 500;
    }
    
    .experience-date {
      color: var(--text-secondary);
      font-size: 0.875rem;
      background: var(--bg-primary);
      padding: 0.25rem 0.75rem;
      border-radius: 999px;
      border: 1px solid var(--border);
    }
    
    .experience-description {
      color: var(--text-secondary);
      margin-bottom: 0.75rem;
    }
    
    .highlights {
      list-style: none;
      padding: 0;
    }
    
    .highlights li {
      padding: 0.5rem 0;
      padding-left: 1.5rem;
      position: relative;
      color: var(--text-secondary);
    }
    
    .highlights li::before {
      content: '▸';
      position: absolute;
      left: 0;
      color: var(--claude-primary);
      font-weight: bold;
    }
    
    .project-item {
      margin-bottom: 1rem;
      padding: 1rem;
      background: var(--bg-primary);
      border-radius: 8px;
      transition: transform 0.2s, box-shadow 0.2s;
    }
    
    .project-item:hover {
      transform: translateY(-2px);
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    }
    
    .project-name {
      font-weight: 700;
      color: var(--text-primary);
      margin-bottom: 0.25rem;
    }
    
    .project-link {
      color: var(--claude-primary);
      text-decoration: none;
      font-size: 0.875rem;
    }
    
    .project-link:hover {
      text-decoration: underline;
    }
    
    .project-description {
      color: var(--text-secondary);
      margin-top: 0.5rem;
      font-size: 0.95rem;
    }
    
    .project-keywords {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
      margin-top: 0.75rem;
    }
    
    .keyword {
      font-size: 0.75rem;
      padding: 0.25rem 0.5rem;
      background: var(--claude-accent);
      color: var(--claude-primary);
      border-radius: 999px;
      font-weight: 500;
    }
    
    .skills-grid {
      display: flex;
      flex-wrap: wrap;
      gap: 0.75rem;
    }
    
    .skill-item {
      padding: 0.5rem 1rem;
      background: var(--bg-primary);
      border: 2px solid var(--border);
      border-radius: 999px;
      font-weight: 500;
      transition: all 0.2s;
    }
    
    .skill-item:hover {
      border-color: var(--claude-primary);
      color: var(--claude-primary);
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(217, 119, 6, 0.1);
    }
    
    .loading {
      text-align: center;
      padding: 3rem;
      color: var(--text-secondary);
    }
    
    .loading-spinner {
      display: inline-block;
      width: 40px;
      height: 40px;
      border: 3px solid var(--border);
      border-top-color: var(--claude-primary);
      border-radius: 50%;
      animation: spin 1s linear infinite;
    }
    
    @keyframes spin {
      to { transform: rotate(360deg); }
    }
    
    @media (max-width: 768px) {
      #app-claude-code {
        padding: 1rem;
      }
      
      .name {
        font-size: 2rem;
      }
      
      .section {
        padding: 1rem;
      }
    }
  </style>
</head>
<body>
  <div id="app-claude-code">
    <div class="loading">
      <div class="loading-spinner"></div>
      <p>Loading resume...</p>
    </div>
  </div>
  
  <script>
    // Height tracking
    let lastHeight = 0;
    let resizeTimeout;
    let isUpdating = false;
    
    function updateHeight() {
      if (isUpdating) return;
      isUpdating = true;
      
      setTimeout(() => {
        // Use body's offset height which is more stable
        const body = document.body;
        const html = document.documentElement;
        const height = Math.max(
          body.scrollHeight,
          body.offsetHeight,
          html.clientHeight,
          html.offsetHeight
        );
        
        // Only send if height actually changed by more than 5px
        if (Math.abs(height - lastHeight) > 5) {
          lastHeight = height;
          parent?.postMessage({ type: 'variant:height', value: height }, '*');
        }
        isUpdating = false;
      }, 0);
    }
    
    async function init() {
      const container = document.getElementById('app-claude-code');
      
      try {
        const response = await fetch('https://www.austinwallace.ca/data/resume.json');
        const resume = await response.json();
        
        // Build HTML
        let html = `
          <header class="header">
            <h1 class="name">${resume.basics?.name || 'Your Name'}</h1>
            <p class="title">${resume.basics?.label || 'Professional Title'}</p>
            <ul class="contact-info">
        `;
        
        // Contact info
        if (resume.basics?.email) {
          html += `
            <li class="contact-item">
              <span class="contact-icon">📧</span>
              <a href="mailto:${resume.basics.email}">${resume.basics.email}</a>
            </li>
          `;
        }
        
        if (resume.basics?.website) {
          html += `
            <li class="contact-item">
              <span class="contact-icon">🌐</span>
              <a href="${resume.basics.website}" target="_blank" rel="noopener">${resume.basics.website}</a>
            </li>
          `;
        }
        
        if (resume.basics?.location?.city) {
          html += `
            <li class="contact-item">
              <span class="contact-icon">📍</span>
              <span>${resume.basics.location.city}</span>
            </li>
          `;
        }
        
        // GitHub
        const github = resume.basics?.profiles?.find(p => p.network?.toLowerCase() === 'github');
        if (github) {
          html += `
            <li class="contact-item">
              <span class="contact-icon">💻</span>
              <a href="${github.url}" target="_blank" rel="noopener">GitHub</a>
            </li>
          `;
        }
        
        // LinkedIn
        const linkedin = resume.basics?.profiles?.find(p => p.network?.toLowerCase() === 'linkedin');
        if (linkedin) {
          html += `
            <li class="contact-item">
              <span class="contact-icon">💼</span>
              <a href="${linkedin.url}" target="_blank" rel="noopener">LinkedIn</a>
            </li>
          `;
        }
        
        html += `
            </ul>
          </header>
        `;
        
        // Summary
        if (resume.basics?.summary) {
          html += `
            <section class="section">
              <h2 class="section-title">
                <span class="section-icon">📋</span>
                Summary
              </h2>
              <p class="summary">${resume.basics.summary}</p>
            </section>
          `;
        }
        
        // Experience
        if (resume.work?.length) {
          html += `
            <section class="section">
              <h2 class="section-title">
                <span class="section-icon">💼</span>
                Experience
              </h2>
          `;
          
          resume.work.forEach(job => {
            html += `
              <div class="experience-item">
                <div class="experience-header">
                  <div>
                    <span class="experience-title">${job.position}</span>
                    <span class="experience-company"> @ ${job.name}</span>
                  </div>
                  <span class="experience-date">${job.startDate}${job.endDate ? ` – ${job.endDate}` : ' – Present'}</span>
                </div>
            `;
            
            if (job.summary) {
              html += `<p class="experience-description">${job.summary}</p>`;
            }
            
            if (job.highlights?.length) {
              html += '<ul class="highlights">';
              job.highlights.forEach(h => {
                html += `<li>${h}</li>`;
              });
              html += '</ul>';
            }
            
            html += '</div>';
          });
          
          html += '</section>';
        }
        
        // Projects
        if (resume.projects?.length) {
          html += `
            <section class="section">
              <h2 class="section-title">
                <span class="section-icon">🚀</span>
                Projects
              </h2>
          `;
          
          resume.projects.forEach(project => {
            html += `
              <div class="project-item">
                <div class="project-name">${project.name}</div>
            `;
            
            if (project.url) {
              html += `<a href="${project.url}" class="project-link" target="_blank" rel="noopener">${project.url}</a>`;
            }
            
            if (project.description) {
              html += `<p class="project-description">${project.description}</p>`;
            }
            
            if (project.keywords?.length) {
              html += '<div class="project-keywords">';
              project.keywords.forEach(k => {
                html += `<span class="keyword">${k}</span>`;
              });
              html += '</div>';
            }
            
            html += '</div>';
          });
          
          html += '</section>';
        }
        
        // Skills
        if (resume.skills?.length) {
          html += `
            <section class="section">
              <h2 class="section-title">
                <span class="section-icon">⚡</span>
                Skills
              </h2>
              <div class="skills-grid">
          `;
          
          resume.skills.forEach(skill => {
            let skillText = skill.name;
            if (skill.keywords?.length) {
              skillText += ` — ${skill.keywords.join(', ')}`;
            }
            html += `<div class="skill-item">${skillText}</div>`;
          });
          
          html += `
              </div>
            </section>
          `;
        }
        
        container.innerHTML = html;
        
        // Post initial height to parent
        requestAnimationFrame(() => {
          updateHeight();
        });
        
      } catch (error) {
        console.error('Error loading resume:', error);
        container.innerHTML = `
          <div style="text-align: center; padding: 2rem; color: #ef4444;">
            <h2>Error Loading Resume</h2>
            <p>Unable to fetch resume data. Please try again later.</p>
          </div>
        `;
      }
    }
    
    // Initialize
    init();
    
    // Only update on actual window resize (not scrolling)
    let windowWidth = window.innerWidth;
    window.addEventListener('resize', () => {
      // Check if it's an actual resize, not just a scroll
      if (window.innerWidth !== windowWidth) {
        windowWidth = window.innerWidth;
        clearTimeout(resizeTimeout);
        resizeTimeout = setTimeout(() => {
          requestAnimationFrame(updateHeight);
        }, 100);
      }
    });
  </script>
</body>
</html>
````

## File: src/routes/+layout.svelte
````
<script>
  import { PROVIDERS, DEPLOYMENT_VARIANTS } from '$lib/providers';
  export let data; // { currentProviderId, isOnEnablement, isVariantRoute, isExternalPath }

  // Simple backend detection based on pathname prefixes that the SST router
  // forwards to external apps. Falls back to AWS/SST for the core site.
  function detectBackend(pathname) {
    if (!pathname) return 'AWS';
    if (pathname.startsWith('/azure/next')) return 'Vercel (Next.js)';
    if (pathname.startsWith('/azure/react')) return 'Azure SWA (React)';
    if (pathname.startsWith('/gcp/tanstack')) return 'Netlify (TanStack)';
    return 'AWS (SST)';
  }

  let backend = detectBackend(typeof window !== 'undefined' ? window.location.pathname : '');
  let isExternalPath = data?.isExternalPath ?? (typeof window !== 'undefined' ? /^(?:\/azure\/|\/gcp\/)/.test(window.location.pathname) : false);
  let isFramed = typeof window !== 'undefined' ? window.self !== window.top : false;
  $: isShellHidden = isExternalPath || isFramed;

  // Light‑weight progress bar driven by client‑side navigation
  let loading = false;
  import { afterNavigate, beforeNavigate } from '$app/navigation';
  if (typeof window !== 'undefined') {
    beforeNavigate(() => { loading = true; });
    afterNavigate(() => { 
      loading = false; 
      backend = detectBackend(window.location.pathname);
      isExternalPath = /^(?:\/azure\/|\/gcp\/)/.test(window.location.pathname);
      isFramed = window.self !== window.top;
    });
  }

  // Minimal route inspector (toggle with ?). Shows path, backend, and HEAD headers.
  let inspectorOpen = false;
  let headHeaders = [];
  async function refreshHeaders() {
    headHeaders = [];
    try {
      const res = await fetch(window.location.href, { method: 'HEAD' });
      // Collect a few interesting headers
      const interesting = ['server', 'x-backend', 'x-cache', 'cache-control', 'age', 'content-type', 'server-timing'];
      headHeaders = interesting.map((h) => ({ name: h, value: res.headers.get(h) })).filter(h => h.value);
    } catch {}
  }
  function onKeydown(e) {
    if (e.key === '?') {
      inspectorOpen = !inspectorOpen;
      if (inspectorOpen && typeof window !== 'undefined') refreshHeaders();
    }
  }
  if (typeof window !== 'undefined') {
    window.addEventListener('keydown', onKeydown);
  }

  let showDeploymentVariants = false; // default; will be set by route below
  let userToggled = false;

  $: ({ currentProviderId, isOnEnablement, isVariantRoute } = data);
  $: activeProviders = showDeploymentVariants ? DEPLOYMENT_VARIANTS : PROVIDERS;
  $: currentProvider = [...PROVIDERS, ...DEPLOYMENT_VARIANTS].find(p => p.id === currentProviderId) ?? PROVIDERS[0];

  // Default the sidebar to Deploy Variants on /with/<tool> routes
  // Respect user toggles for the remainder of the session
  $: if (!userToggled) {
    showDeploymentVariants = !!isVariantRoute;
  }

  $: getProviderPath = (targetPage) => {
    return targetPage === 'resume'
      ? (currentProviderId === 'minimal' ? '/' : `/with/${currentProviderId}`)
      : (currentProviderId === 'minimal' ? '/enablement' : `/with/${currentProviderId}/enablement`);
  }

  function handleProviderClick(e, provider) {
    // Block navigation for coming-soon items
    if (provider.comingSoon) {
      e.preventDefault();
      return;
    }
    // For deployment variants, let the anchor's href/target handle navigation
    // so we open in a new tab when target="_blank" is set.
  }

  function toggleVariantType() {
    userToggled = true;
    showDeploymentVariants = !showDeploymentVariants;
  }
</script>

<style>
  .layout-container {
    display: flex;
    height: 100vh;
    overflow: hidden;
  }
  
  .sidebar {
    width: 80px;
    background: #fafafa;
    border-right: 1px solid var(--border);
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
    border: 1px solid var(--border);
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
  }

  .sidebar-divider {
    height: 1px;
    background: var(--border);
    margin: 0.5rem 1rem;
  }
  
  .sidebar-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.75rem;
    text-decoration: none;
    color: var(--fg);
    border-radius: 8px;
    margin: 0 0.5rem;
    transition: all 0.2s ease;
    min-height: 60px;
    position: relative;
  }
  
  .sidebar-item:hover {
    background: #f0f0f0;
    transform: translateX(2px);
  }
  
  .sidebar-item.active {
    background: #fff;
    box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  }
  
  .sidebar-item.active::before {
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
  
  .sidebar-item.coming-soon {
    opacity: 0.6;
    cursor: not-allowed;
  }
  
  .sidebar-item.coming-soon:hover {
    opacity: 0.8;
    transform: none;
  }
  
  .sidebar-item.coming-soon .sidebar-logo,
  .sidebar-item.coming-soon .sidebar-icon {
    filter: grayscale(30%);
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
  
  .sidebar-item.coming-soon:hover .coming-soon-tooltip {
    opacity: 1;
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
    border-bottom: 1px solid var(--border);
    background: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .progress {
    position: fixed;
    top: 0; left: 0; right: 0;
    height: 3px;
    background: linear-gradient(90deg, var(--progress-color, #111) 0%, transparent 70%);
    background-size: 200% 100%;
    animation: progress 1.2s linear infinite;
    opacity: 0.9;
    z-index: 1000;
  }
  @keyframes progress { from { background-position: 200% 0 } to { background-position: -200% 0 } }
  
  .content-area {
    flex: 1;
    max-width: 2000px;
    width: 100%;
    margin: 0 auto;
    padding: 1.25rem;
  }
  
  footer {
    padding: 1rem 2rem;
    border-top: 1px solid var(--border);
    background: #fafafa;
    text-align: center;
    color: var(--muted);
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
  
  .active-page {
    font-weight: 600;
    color: var(--text);
    text-decoration: underline;
  }

  /* Remove padding for pages with VariantFrame */
  .content-area:has(.frame-wrap) {
    padding: 0;
  }
  
  @media (max-width: 768px) {
    .sidebar {
      width: 60px;
    }
    
    .sidebar-label {
      display: none;
    }
  }
  .backend-pill {
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.25rem 0.6rem;
    border-radius: 999px;
    border: 1px solid var(--border);
    background: #fafafa;
    font-size: 0.8rem;
    color: #333;
  }
  .inspector {
    position: fixed;
    right: 16px;
    bottom: 16px;
    width: min(420px, 90vw);
    background: #111;
    color: #fff;
    border-radius: 10px;
    box-shadow: 0 10px 30px rgba(0,0,0,0.35);
    z-index: 1001;
    border: 1px solid #333;
    overflow: hidden;
  }
  .inspector header { display:flex; justify-content: space-between; align-items:center; padding: 10px 12px; background:#171717; border-bottom:1px solid #2a2a2a; }
  .inspector pre { margin: 0; padding: 10px 12px; white-space: pre-wrap; font-size: 12px; line-height: 1.4; }
  .kbd { background:#222; border:1px solid #444; padding:1px 6px; border-radius:6px; font-size: 11px; }
</style>

<div class="layout-container">
  {#if loading}
    <div class="progress" style="--progress-color:{backend.includes('Vercel') ? '#000' : backend.includes('Azure') ? '#0078D4' : backend.includes('Netlify') ? '#00AD9F' : '#FF9900'}"></div>
  {/if}
  {#if !isShellHidden}
  <nav class="sidebar" aria-label="Variants">
    <!-- Toggle between AI and Deployment variants -->
    <button 
      class="variant-toggle" 
      on:click={toggleVariantType}
      title="Switch between AI-styled and deployment variants"
    >
      <span class="variant-toggle-icon">
        {showDeploymentVariants ? '🚀' : '🤖'}
      </span>
      <span class="variant-toggle-label">
        {showDeploymentVariants ? 'Deploy\nVariants' : 'AI\nVariants'}
      </span>
    </button>
    
    <div class="sidebar-divider"></div>
    
    {#each activeProviders as provider}
      {@const providerHref = provider.isDeployment
        // Preserve the currently selected AI variant when jumping to a deployment variant
        ? (
            currentProviderId === 'minimal'
              // Minimal doesn't have a variant file in external apps; go to the app root
              ? provider.externalUrl
              // Deep link to the same variant (and page type) within the external app
              // All deployment variants now use their app routes, not static HTML
              : `${provider.externalUrl}/with/${currentProviderId}${isOnEnablement ? '/enablement' : ''}`
          )
        : provider.comingSoon 
          ? '#' 
          : provider.id === 'minimal' 
            ? (isOnEnablement ? '/enablement' : '/')
            : (isOnEnablement ? `/with/${provider.id}/enablement` : `/with/${provider.id}`)}
      <a 
        href={providerHref}
        class="sidebar-item"
        class:active={currentProvider?.id === provider.id}
        class:coming-soon={provider.comingSoon}
        style="--accent-color: {provider.color || '#000'}"
        title="{provider.name}{provider.comingSoon ? ' (coming soon)' : ''}{provider.isDeployment ? ' (external deployment)' : ''}"
        on:click={(e) => handleProviderClick(e, provider)}
        target={provider.isDeployment ? '_blank' : null}
        rel={provider.isDeployment ? 'noopener noreferrer' : null}
      >
        {#if provider.logo}
          <img src={provider.logo} alt={provider.name} class="sidebar-logo" />
        {:else}
          <span class="sidebar-icon" style="color: {provider.color || 'inherit'}">
            {provider.icon}
          </span>
        {/if}
        <span class="sidebar-label">{provider.name}</span>
        {#if provider.comingSoon}
          <span class="coming-soon-tooltip">Coming Soon</span>
        {/if}
      </a>
    {/each}
  </nav>
  {/if}

  <div class="main-content">
    {#if !isShellHidden}
    <header>
      <div style="display: flex; align-items: center; gap: 2rem;">
        <a href="/" style="text-decoration:none;color:inherit;font-weight:700">
          Austin Wallace — Data Engineer
        </a>
        <nav style="display: flex; gap: 1rem;">
          <a href={getProviderPath('resume')} class:active-page={!isOnEnablement}>Resume</a>
          <a href={getProviderPath('enablement')} class:active-page={isOnEnablement}>AI Enablement</a>
        </nav>
        <div style="display:flex; gap:8px; align-items:center;">
          {#if currentProvider}
            <span class="provider-badge">
              <span style="color: {currentProvider.color}">{currentProvider.icon}</span>
              {currentProvider.name} Version
            </span>
          {/if}
          <span class="backend-pill" aria-label="Current backend">
            🔌 {backend}
          </span>
        </div>
      </div>
    </header>
    {/if}

    <div class="content-area" id="content">
      <slot />
    </div>

    {#if !isShellHidden}
    <footer>
      <p>Base text written by Austin, enhanced by various AI tooling providers, and deployed with SST. </p>
    </footer>
    {/if}
  </div>
</div>

{#if inspectorOpen}
  <div class="inspector">
    <header>
      <strong>Route Inspector</strong>
      <span class="kbd">?</span>
    </header>
    <pre>
Path: {typeof window !== 'undefined' ? window.location.pathname : ''}
Backend: {backend}
{#if headHeaders.length}
Headers:
{#each headHeaders as h}- {h.name}: {h.value}
{/each}
{:else}
Press ? to refresh headers
{/if}
    </pre>
  </div>
{/if}
````

## File: src/lib/providers.ts
````typescript
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
    path: '/azure/next', 
    isDeployment: true,
    externalUrl: 'https://www.austinwallace.ca/azure/next',
    icon: '▲',
    logo: '/logos/vercel.svg',
    color: '#000',
    noindex: true
  },
  { 
    id: 'react-azure', 
    name: 'React (Azure)', 
    path: '/azure/react', 
    isDeployment: true,
    externalUrl: 'https://www.austinwallace.ca/azure/react',
    icon: '⚛️',
    logo: '/logos/azure.svg',
    color: '#0078d4',
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
````
