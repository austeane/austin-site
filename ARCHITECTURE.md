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