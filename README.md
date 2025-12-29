# AI‑Variant Resume Platform

Showcases one set of resume content rendered through multiple AI‑styled UIs, all served under a single domain. The app demonstrates multi‑cloud routing behind CloudFront, strict iframe isolation, and a centralized data layer.

## What This Demonstrates
- Single‑domain, multi‑cloud routing via SST/CloudFront to Vercel and Netlify.
- Static AI variants in sandboxed iframes with provider‑aware navigation.
- Centralized JSON data endpoints with ETag for consistency and caching.
- Clean URLs for variant pages using lightweight SSR host routes.

## Live Examples
- Main site: https://www.austinwallace.ca
- Data: https://www.austinwallace.ca/data/resume.json
- Deploy variants: `/vercel/next`, `/gcp/tanstack`

## Architecture At A Glance
- SvelteKit at the root handles the canonical pages (`/`, `/enablement`) and SSR‑only variant hosts (`/with/<tool>`).
- Each AI variant is a static bundle served from `/variants/<tool>/...` and iframed for isolation.
- SST Router (CloudFront) prefixes route to external framework apps:
  - `/vercel/next` → Next.js (Vercel)
  - `/gcp/tanstack` → TanStack (Netlify)

## Why It’s Interesting
- Pragmatic SSR where it buys reliability (clean URLs for `/with/*` without edge rewrites).
- Security‑minded defaults (noindex for host pages; sandboxed iframes).
- Operationally simple: static variants are easy to validate, cache, and ship.

## Stack
- App: SvelteKit, TypeScript, Svelte
- Infra: SST (AWS Lambda + CloudFront)
- Variants: Static HTML, Next.js, React, TanStack Router

## Run Locally
```bash
npm install
npm run dev
```

## Code Tour
- `src/lib/providers.ts` — source of truth for providers/variants
- `src/lib/components/VariantFrame.svelte` — iframe host with autosize support
- `src/routes/data/*` — JSON endpoints powering all variants

## For Developers
- Architecture overview: `docs/ARCHITECTURE.md`
- Detailed architecture: `docs/ARCHITECTURE_DETAILED.md`
- Routing guide: `docs/ROUTING_GUIDE.md`
- Deployment guide: `docs/DEPLOYMENT.md`
- Troubleshooting: `docs/troubleshooting/*`
- Test reports: `docs/reports/*`

## License
MIT
