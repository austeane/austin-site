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
