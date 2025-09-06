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
/data/*.json               # CORS-enabled data endpoints
```

### Variant System
Variants are static HTML files in `/static/variants/[tool-name]/` that must:
1. Fetch data from `/data/resume.json` or `/data/enablement.json`
2. Post height updates: `parent?.postMessage({ type: 'variant:height', value: scrollHeight }, '*')`
3. Be self-contained with all assets

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

## Content Updates
Edit JSON files in `src/lib/data/` — the API endpoints `/data/resume.json` and `/data/enablement.json` will reflect changes across all variants.
