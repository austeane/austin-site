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
