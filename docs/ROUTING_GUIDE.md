# Routing Guide

## Overview
How traffic flows through CloudFront (SST Router) to SvelteKit and the external framework apps.

## Main SvelteKit routes

### Canonical
- `/` — Resume (Svelte page, prerendered)
- `/enablement` — Enablement (Svelte page, prerendered)

### Variant hosts (SSR-only)
- `/with/<tool>`
- `/with/<tool>/enablement`

**Behavior:** These are **SSR wrappers** that iframe static variant bundles:
- `/variants/<tool>/index.html`
- `/variants/<tool>/enablement/index.html`

**Reason:** Guarantees clean URLs without rewriting `/with/foo` → `/with/foo/index.html`.

```ts
// src/routes/with/[tool]/+page.ts
export const prerender = false; // SSR-only

// src/routes/with/[tool]/enablement/+page.ts
export const prerender = false; // SSR-only
```

### Static variant files (SSG)
- `/variants/<tool>/index.html`
- `/variants/<tool>/enablement/index.html`

### Data API
- `/data/resume.json`
- `/data/enablement.json`

(ETag + open CORS; see endpoints for headers)

## External deployments

### Next.js (Vercel) — `/azure/next`
- Next config: `basePath: '/azure/next'`

### React (Azure SWA) — `/azure/react`
- Vite base: `/azure/react/`
- staticwebapp.config.json rewrites:
```json
{ "routes": [
    { "route": "/azure/react/assets/*", "rewrite": "/assets/{*path}" },
    { "route": "/azure/react/*", "rewrite": "/{*path}" }
]}
```

### TanStack (Netlify) — `/gcp/tanstack`
- Vite base: `/gcp/tanstack/`
- Netlify redirects:
```toml
[[redirects]]
  from="/gcp/tanstack/*"
  to="/index.html"
  status=200
```

## Router (SST) behavior (concept)
- Mount SvelteKit at `/`
- Route prefixes:
  - `/azure/next` → Next.js origin
  - `/azure/react` → Azure SWA origin (with asset rewrite)
  - `/gcp/tanstack` → Netlify origin

## Tests
```bash
base=https://<your-cloudfront>

# Variant hosts (SSR)
curl -I "$base/with/claude-code"                   # 200
curl -I "$base/with/claude-code/enablement"        # 200

# Static variants
curl -I "$base/variants/claude-code/index.html"              # 200
curl -I "$base/variants/claude-code/enablement/index.html"   # 200

# Data
curl -I "$base/data/resume.json"
curl -I "$base/data/enablement.json"
```

## SEO
- `robots.txt` includes `Disallow: /with/`
- Variant hosts add `<meta name="robots" content="noindex, nofollow">`