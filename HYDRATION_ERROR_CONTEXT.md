# React 310 Hydration Error - Complete Context

## Current Issue
All three deployment variants (Next.js/Vercel, React/Azure SWA, TanStack/Netlify) are showing React error 310 (hydration mismatch) when accessed through CloudFront at `https://d2li8p8xclq49l.cloudfront.net`, despite curl tests showing 200 OK responses.

## Error Details
- **Error**: Minified React error #310 (hydration mismatch during SSR)
- **Browser console**: Shows the error occurs in React's useMemo hook
- **Network tab**: Shows correct resources loading (200 responses) but React fails to hydrate

## Infrastructure Setup

### CloudFront Distribution
- **Distribution ID**: E1JQ3CFBKJU5SV  
- **Domain**: https://d2li8p8xclq49l.cloudfront.net
- **Router**: SST Router configured to route paths to different origins

### Current Origins (as deployed)
```typescript
// From sst.config.ts after latest deployment
AZURE_NEXT_ORIGIN: "https://austin-site-seven-kappa.vercel.app"
AZURE_REACT_ORIGIN: "https://gray-pebble-049c9b91e.1.azurestaticapps.net"  
GCP_TANSTACK_ORIGIN: "https://austin-site.netlify.app"
```

### Routing Configuration
```typescript
router.route("/azure/next", AZURE_NEXT_ORIGIN);
router.route("/azure/react/assets", AZURE_REACT_ORIGIN, {
  rewrite: { regex: "^/azure/react/assets/(.*)$", to: "/assets/$1" }
});
router.route("/azure/react", AZURE_REACT_ORIGIN, {
  rewrite: { regex: "^/azure/react/(.*)$", to: "/$1" }
});
router.route("/gcp/tanstack", GCP_TANSTACK_ORIGIN);
```

## What We've Discovered

### 1. Origin Mismatch (FIXED)
Initially CloudFront was pointing to wrong Vercel origin:
- **Old**: austin-site-seven.vercel.app → served `page-f6611fff337c4989.js`
- **New**: austin-site-seven-kappa.vercel.app → serves `page-e17e4cdc958f7c5b.js`
- **Status**: Fixed by updating SST_NEXT_ORIGIN and redeploying

### 2. Current Verification Results

#### Curl Tests (WORKING)
```bash
# All return 200 OK
curl -I "https://d2li8p8xclq49l.cloudfront.net/azure/next"     # 200
curl -I "https://d2li8p8xclq49l.cloudfront.net/azure/react"    # 200  
curl -I "https://d2li8p8xclq49l.cloudfront.net/gcp/tanstack"   # 200

# HTML contains correct chunk hash
curl -s "https://d2li8p8xclq49l.cloudfront.net/azure/next" | grep -o 'page-[a-f0-9]*.js'
# Returns: page-e17e4cdc958f7c5b.js (correct)
```

#### Browser Tests (FAILING)
- All three variants show React 310 error
- Network tab shows resources loading successfully
- Data endpoints (/data/resume.json) return 200
- JavaScript chunks load with 200 responses
- But React hydration fails

### 3. Data Fetching Configuration

#### Next.js (variants/nextjs-azure)
```typescript
// src/app/page.tsx
useEffect(() => {
  const dataUrl = process.env.NEXT_PUBLIC_DATA_URL;
  const url = (dataUrl && dataUrl.trim())
    ? dataUrl
    : new URL('/data/resume.json', window.location.origin).toString();
  fetch(url, { headers: { Accept: 'application/json' } })
    .then((r) => { if (!r.ok) throw new Error(`HTTP ${r.status}`); return r.json(); })
    .then(setData)
    .catch((e) => setErr(e.message));
}, []);
```

#### Next.js Config
```javascript
// next.config.mjs
const basePath = "/azure/next";
const nextConfig = {
  basePath,
  images: { unoptimized: true },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  async rewrites() {
    const origin = process.env.NEXT_DATA_ORIGIN;
    return origin ? [{ source: '/data/:path*', destination: `${origin}/data/:path*` }] : [];
  },
  ...(isVercel ? {} : { output: "standalone" }),
};
```

## Cache Invalidation History
Multiple CloudFront invalidations performed:
1. Initial: `/azure/next/*`
2. Expanded: `/azure/next`, `/azure/next/*`  
3. Full: `/*`
4. Latest: `/azure/next`, `/azure/next/*`, `/azure/react`, `/azure/react/*`, `/gcp/tanstack`, `/gcp/tanstack/*`

All invalidations completed successfully but issue persists.

## Network Request Analysis

### Working Requests (from browser network tab)
```
[GET] https://d2li8p8xclq49l.cloudfront.net/azure/next => [200]
[GET] https://d2li8p8xclq49l.cloudfront.net/azure/next/_next/static/chunks/app/page-e17e4cdc958f7c5b.js => [200]
[GET] https://d2li8p8xclq49l.cloudfront.net/data/resume.json => [200]
```

### Failed Requests (404s - non-critical)
```
[GET] https://d2li8p8xclq49l.cloudfront.net/azure/next/logos/claude.svg => [404]
[GET] https://d2li8p8xclq49l.cloudfront.net/azure/next/logos/chatgpt.svg => [404]

Note: These are expected unless `/public/logos/*` exists in each variant. They should not cause hydration issues.
```

## Hypothesis

The issue appears to be a **client-side hydration mismatch** rather than an infrastructure problem:

1. **Server-side rendering** works (curl returns correct HTML)
2. **Client-side resources** load correctly (all JS chunks return 200)
3. **Data fetching** works (/data/resume.json returns 200)
4. **But hydration fails** with React error 310

This suggests the server-rendered HTML doesn't match what React expects during client-side hydration.

## Potential Causes

1. **Environment variable mismatch**: Server and client see different values for `process.env.NEXT_PUBLIC_DATA_URL`
2. **Build-time vs runtime**: The build on Vercel might have different env vars than runtime
3. **useMemo dependency issue**: The error occurs in useMemo, suggesting dependencies change between server and client
4. **Window object access**: Using `window.location.origin` in useEffect but not handling SSR properly

## Actions Taken

1. ✅ Updated SST Router to correct Vercel origin
2. ✅ Redeployed SST with new configuration  
3. ✅ Invalidated CloudFront cache multiple times
4. ✅ Verified correct HTML/chunks via curl
5. ✅ Updated Next.js data fetching to handle empty env vars
6. ❌ Browser still shows hydration errors

## Next Debugging Steps

1. **Check Vercel environment variables**:
   - Verify NEXT_PUBLIC_DATA_URL is not set or is empty
   - Consider setting NEXT_DATA_ORIGIN for direct Vercel access

2. **Test direct origins**:
   - https://austin-site-seven-kappa.vercel.app/azure/next
   - https://gray-pebble-049c9b91e.1.azurestaticapps.net
   - https://austin-site.netlify.app

3. **Examine hydration mismatch details**:
   - Build with development mode to see full error
   - Check what HTML server renders vs what client expects

4. **Consider SSR/CSR mismatch**:
   - The useMemo hook with `basics` dependency might compute differently
   - Window-dependent code in useEffect might cause issues

## Commands for Testing

```bash
# Check what CloudFront serves
curl -s "https://d2li8p8xclq49l.cloudfront.net/azure/next" | grep -o 'page-[a-f0-9]*.js' | head -1

# Check what Vercel serves directly  
curl -s "https://austin-site-seven-kappa.vercel.app/azure/next" | grep -o 'page-[a-f0-9]*.js' | head -1

# Test data endpoint
curl -I "https://d2li8p8xclq49l.cloudfront.net/data/resume.json"

# Full route test
./scripts/test-routes.sh "https://d2li8p8xclq49l.cloudfront.net"

# Invalidate CloudFront
AWS_PROFILE=prod aws cloudfront create-invalidation \
  --distribution-id E1JQ3CFBKJU5SV \
  --paths "/azure/next" "/azure/next/*"
```

## Files to Check

- `/variants/nextjs-azure/src/app/page.tsx` - Main page with hydration error
- `/variants/nextjs-azure/src/app/layout.tsx` - Layout component
- `/variants/nextjs-azure/next.config.mjs` - Next.js configuration
- `/sst.config.ts` - SST Router configuration
- `/variants/react-azure/src/App.tsx` - React variant
- `/variants/tanstack-gcp/src/routes/index.tsx` - TanStack variant

## Summary

The infrastructure appears correctly configured (curl tests pass), but React hydration fails in the browser. This points to a client-side JavaScript issue, likely related to how the app handles environment variables or computes values differently between server and client rendering.
