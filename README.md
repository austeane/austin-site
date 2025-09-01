# Austin Site — AI‑Variant Resume & Enablement

A SvelteKit site that shows the same content through multiple **AI‑styled variants**.
Each variant is a static HTML bundle rendered in a sandboxed **iframe** and fed from shared JSON data.

> **Core idea:** One source of truth (`/static/data/*.json`), many presentational variants (`/static/variants/<tool>/…`).

---

## Highlights

* **Multi‑variant system:** Switch between tool‑specific designs (Lovable, GPT‑5, etc.).
* **Strict isolation:** Variants run in sandboxed iframes to avoid CSS/JS leaks.
* **Single data source:** Variants fetch `/data/resume.json` or `/data/enablement.json`.
* **Parent‑controlled sizing:** The parent page controls **max width** per variant and uses a **fixed iframe height** (scrollbars inside the frame). No variant changes required.
* **Validator:** Script checks variant HTML semantics, local asset links, and data‑fetch presence.

---

## How to run locally

```bash
npm run dev
```

---

## Project Structure

```
src/
  lib/
    components/VariantFrame.svelte     # sandboxed iframe wrapper
    providers.ts                        # provider registry + types
  routes/
    +layout.svelte / +layout.ts         # shell, sidebar, navigation
    +page.svelte / +page.ts             # canonical minimal resume (/)
    enablement/…                        # canonical enablement page
    with/[tool]/…                       # variant routes
    robots.txt/+server.ts               # robots
static/
  data/
    resume.json                         # resume content (canonical)
    enablement.json                     # enablement content (canonical)
  variants/<tool>/index.html            # resume variant (single file or bundle)
  variants/<tool>/enablement/index.html # enablement variant
scripts/
  validate-variant.mjs                  # HTML + contract checks
```

---

## Routes

* `/` – Minimal/canonical resume (Svelte page).
* `/enablement` – Canonical enablement page (Svelte page).
* `/with/<tool>` – Resume as rendered by a specific variant.
* `/with/<tool>/enablement` – Enablement content rendered by the same variant.
* `/data/resume.json` & `/data/enablement.json` – Shared JSON (served from `static/`).


---

## Variant Contract

A variant is **just static HTML** (optionally with its own inline CSS/JS). It must:

1. **Fetch shared data**

   * Resume: `fetch('/data/resume.json')`
   * Enablement: `fetch('/data/enablement.json')`

2. **Be self‑contained**

   * Keep assets inside its own folder under `static/variants/<tool>/…`, or use CDNs.
   * Don’t reference files outside your variant folder (except the two JSON endpoints).

3. **Play nice in an iframe**

   * No special messaging required. We **do not** rely on height postMessages.
   * Open external links with `target="_blank"` and `rel="noopener noreferrer"`.

### Creating a new variant

```
/static/variants/<my-tool>/
├── index.html
└── enablement/
    └── index.html
```

Make sure your HTML fetches the appropriate JSON and renders from it.


---

## Validation

The validator does:

* HTML semantics via `html-validate`
* Presence of data fetch: `/data/resume.json` or `/data/enablement.json`
* Missing local asset references
* (Informational) height postMessage hints

Run it with:

```bash
npm run validate:variants
```

---

## Development Notes

* **Security:** Variants render in a sandboxed iframe with `allow-scripts allow-same-origin allow-popups allow-popups-to-escape-sandbox`.
* **Accessibility:** Minimal pages use semantic headings and simple focusable controls. Variants should include their own a11y affordances.
* **Performance:** Variants are static and cache‑friendly. Shared JSON is tiny and served from `/static`.

---

## Deployment

### Static build

```bash
npm run build
# Deploy the 'build' directory to your static host (Vercel/Netlify/Cloudflare Pages/etc.)
```

### AWS (SST)

This repo includes SST scaffolding for SvelteKit.

```bash
AWS_PROFILE=prod npx sst deploy --stage production
```

---

## License

MIT
