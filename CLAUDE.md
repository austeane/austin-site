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

### Analytics
```bash
# View site analytics (last 7 days by default)
AWS_PROFILE=prod npm run analytics

# View blog-only analytics
AWS_PROFILE=prod npm run analytics:blog

# Custom options
AWS_PROFILE=prod npx tsx scripts/analytics.ts --days 30          # Last 30 days
AWS_PROFILE=prod npx tsx scripts/analytics.ts --blog-only        # Blog posts only
AWS_PROFILE=prod npx tsx scripts/analytics.ts --bucket BUCKET    # Specify bucket
```

The analytics script pulls CloudFront access logs from S3 and displays:
- Total page views and unique visitors
- Top pages and blog posts
- Referrer sources
- Browser breakdown
- Daily traffic trends
- Geographic distribution (edge locations)

**Note**: CloudFront logs have a 1-2 hour delay before appearing in S3.

### Deployment
```bash
# Deploy to production (requires AWS credentials)
AWS_PROFILE=prod npx sst deploy --stage production

# Unlock deployment if locked
AWS_PROFILE=prod npx sst unlock --stage production
```

### IMPORTANT: Testing Requirements
**Always verify deployments with MCP browser tools before declaring them fixed:**
- Use `mcp__playwright__browser_navigate` to test URLs in a real browser
- Use `mcp__playwright__browser_snapshot` to verify page content
- Don't rely solely on curl/API tests - browser testing catches cache issues
- If you see errors in browser but curl works, it's likely a caching issue

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

Note: When variants are hosted on separate origins and mounted under subpaths via the SST Router (e.g., `/gcp/tanstack`), ensure the app is built with that base path and the host is configured to rewrite `/<prefix>/assets/*` → `/assets/*` so asset URLs resolve correctly behind CloudFront.

### SST Deployment Configuration
- **Domain**: www.austinwallace.ca (CloudFront + ACM certificate)
- **DNS**: External management via GoDaddy
- **Certificate ARN**: `arn:aws:acm:us-east-1:737679990662:certificate/061f07dc-2e1e-4751-bfee-e7e26c8b7c80`

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
  --output repomix-60k.md 
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
