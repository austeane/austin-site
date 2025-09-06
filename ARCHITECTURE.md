# Multi-Framework Resume Platform Architecture

## Overview

This project demonstrates a sophisticated multi-cloud, multi-framework architecture where a single CloudFront distribution serves a main SvelteKit application alongside three framework variants (Next.js, React, TanStack) deployed on different cloud providers (Vercel, Azure, Netlify). All variants share centralized data served through CloudFront.

## Architecture Diagram

```
CloudFront Distribution (https://d2li8p8xclq49l.cloudfront.net)
├── /                    → SvelteKit on AWS Lambda (Main Site)
├── /enablement          → SvelteKit Enablement Page
├── /data/*              → Centralized JSON Data (CORS-enabled)
├── /azure/next/*        → Next.js on Vercel
├── /azure/react/*       → React on Azure Static Web Apps
└── /gcp/tanstack/*      → TanStack on Netlify
```

## Core Components

### 1. SST Router Configuration (`sst.config.ts`)

The SST Router uses **prefix matching** (NOT glob patterns):

```typescript
// CRITICAL: SST Router uses startsWith() matching
router.route("/azure/next", AZURE_NEXT_ORIGIN);      // ✅ Correct
router.route("/azure/next/*", AZURE_NEXT_ORIGIN);    // ❌ Wrong - wildcards don't work

// Router-level rewrites for Azure React
router.route("/azure/react/assets", AZURE_REACT_ORIGIN, {
  rewrite: { regex: "^/azure/react/assets/(.*)$", to: "/assets/$1" }
});
router.route("/azure/react", AZURE_REACT_ORIGIN, {
  rewrite: { regex: "^/azure/react/(.*)$", to: "/$1" }
});
```

### 2. Framework Variants

#### Next.js on Vercel (`variants/nextjs-azure/`)
- **Base Path**: `/azure/next` configured in `next.config.mjs`
- **Data URL**: Must use CloudFront URL: `https://d2li8p8xclq49l.cloudfront.net/data/resume.json`
- **Key Files**:
  - `src/app/page.tsx` - Main page with `transformSharedResume` function
  - `next.config.mjs` - Base path configuration

#### React on Azure Static Web Apps (`variants/react-azure/`)
- **Base Path**: `/azure/react` configured in `vite.config.ts`
- **Build Output**: `dist/azure/react/` (aligned with URL structure)
- **Key Files**:
  - `staticwebapp.config.json` - Must be copied to `dist/` during deploy
  - `src/App.tsx` - Contains `transformSharedResume` function

#### TanStack on Netlify (`variants/tanstack-gcp/`)
- **Base Path**: `/gcp/tanstack` configured in `vite.config.ts`
- **Redirects**: Generated during deploy in `dist/_redirects`
- **Key Files**:
  - `src/routes/index.tsx` - Contains `transformSharedResume` function

### 3. Data Layer

Centralized JSON data served from SvelteKit with CORS headers:

- `/data/resume.json` - Resume data
- `/data/enablement.json` - AI enablement content

Located in `src/lib/data/` and served via `src/routes/data/[slug]/+server.ts`

## Deployment

### Quick Deploy All

```bash
# Deploy all framework variants
./scripts/deploy-all.sh

# Deploy SST Router (after setting environment variables)
export AZURE_NEXT_ORIGIN="https://austin-site-seven.vercel.app"
export AZURE_REACT_ORIGIN="https://gray-pebble-049c9b91e.1.azurestaticapps.net"
export GCP_TANSTACK_ORIGIN="https://austin-site.netlify.app"
AWS_PROFILE=prod npx sst deploy --stage production
```

### Individual Deployments

#### Next.js to Vercel
```bash
cd variants/nextjs-azure
npm run build
npx vercel --prod
```

#### React to Azure Static Web Apps
```bash
cd variants/react-azure
npm run build
cp staticwebapp.config.json dist/  # CRITICAL: Must copy config
npx @azure/static-web-apps-cli deploy ./dist \
  --app-name gray-pebble-049c9b91e \
  --deployment-token $AZURE_STATIC_WEB_APPS_API_TOKEN \
  --env production
```

#### TanStack to Netlify
```bash
cd variants/tanstack-gcp
npm run build
# Generate redirects
echo '/gcp/tanstack/assets/*  /assets/:splat  200
/gcp/tanstack/*         /index.html     200' > dist/_redirects
netlify deploy --prod --dir=dist
```

## Testing

Run the comprehensive test suite:

```bash
./scripts/test-routes.sh "https://d2li8p8xclq49l.cloudfront.net"
```

This tests:
- Main routes (/, /enablement)
- Data endpoints with CORS headers
- Framework variant routes
- Asset MIME types
- CSS content-type headers

## Common Issues & Solutions

### Issue 1: Framework Routes Return 404

**Symptom**: `/azure/react` returns 404 from SvelteKit

**Cause**: SST Router not configured correctly

**Solution**: 
- Remove wildcards from router patterns
- Ensure environment variables are set before SST deploy
- SST Router uses `startsWith()` prefix matching

### Issue 2: Assets Return Wrong MIME Type

**Symptom**: CSS files return `text/html` instead of `text/css`

**Cause**: Origin rewrite rules not working

**Solutions**:

1. **Azure Static Web Apps**: Ensure `staticwebapp.config.json` is in `dist/`
2. **Netlify**: Generate `_redirects` file during deploy
3. **SST Router**: Use router-level rewrites for path transformation

### Issue 3: Data Fetching Fails

**Symptom**: "Cannot read properties of undefined" errors

**Cause**: Framework trying to fetch from its own origin instead of CloudFront

**Solution**: Update data URLs to use CloudFront:
```javascript
const dataUrl = 'https://d2li8p8xclq49l.cloudfront.net/data/resume.json';
```

### Issue 4: CORS Errors

**Symptom**: Cross-origin requests blocked

**Solution**: Ensure SvelteKit data endpoints return proper CORS headers:
```typescript
headers: {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type'
}
```

## Key Configuration Files

### Azure Static Web Apps (`staticwebapp.config.json`)
```json
{
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/azure/react/assets/*"]
  },
  "forwardingGateway": {
    "allowedForwardedHosts": [
      "d2li8p8xclq49l.cloudfront.net",
      "www.austinwallace.ca"
    ]
  },
  "routes": [
    {
      "route": "/azure/react/assets/*",
      "rewrite": "/assets/{*path}"
    }
  ]
}
```

### Netlify (`_redirects`)
```
/gcp/tanstack/assets/*  /assets/:splat  200
/gcp/tanstack/*         /index.html     200
```

### Next.js (`next.config.mjs`)
```javascript
const nextConfig = {
  basePath: "/azure/next",
  images: { unoptimized: true }
};
```

### Vite (`vite.config.ts`)
```javascript
export default defineConfig({
  base: '/azure/react/',  // or '/gcp/tanstack/'
  build: {
    outDir: 'dist/azure/react'  // Align with URL structure
  }
});
```

## Environment Variables

### For SST Deployment
```bash
export AZURE_NEXT_ORIGIN="https://austin-site-seven.vercel.app"
export AZURE_REACT_ORIGIN="https://gray-pebble-049c9b91e.1.azurestaticapps.net"
export GCP_TANSTACK_ORIGIN="https://austin-site.netlify.app"
```

### Getting Azure Deployment Token
```bash
az staticwebapp secrets list \
  --name austin-resume-react \
  --resource-group austin-resume-rg \
  --query "properties.apiKey" --output tsv
```

## Data Schema Transformation

All frameworks use a `transformSharedResume` function to normalize the shared JSON schema:

```javascript
function transformSharedResume(shared) {
  // Transform from JSON Resume schema to framework-specific structure
  const basics = shared?.basics ?? {};
  return {
    name: basics?.name || '',
    title: basics?.label || '',
    // ... additional transformations
  };
}
```

## Debugging

### Check CloudFront Distribution
```bash
aws cloudfront get-distribution --id YOUR_DISTRIBUTION_ID
```

### Test Individual Origins
```bash
# Test origins directly
curl -I https://austin-site-seven.vercel.app/azure/next
curl -I https://gray-pebble-049c9b91e.1.azurestaticapps.net/azure/react
curl -I https://austin-site.netlify.app/gcp/tanstack
```

### Check Asset MIME Types
```bash
# Find and check CSS file
css_path=$(curl -s "https://d2li8p8xclq49l.cloudfront.net/azure/react" | \
  grep -o '/azure/react/assets/[^"]*\.css' | head -n1)
curl -sI "https://d2li8p8xclq49l.cloudfront.net$css_path" | grep -i content-type
```

### Monitor Logs
```bash
# SST/Lambda logs
aws logs tail /aws/lambda/YOUR_FUNCTION_NAME --follow

# Vercel logs
vercel logs

# Azure Static Web Apps
az staticwebapp show --name austin-resume-react

# Netlify
netlify status
```

## Performance Optimization

1. **CloudFront Caching**: Static assets cached at edge locations
2. **Prerendering**: SvelteKit pages prerendered where possible
3. **Code Splitting**: All frameworks implement automatic code splitting
4. **Asset Optimization**: Images and CSS optimized during build

## Security Considerations

1. **CORS Headers**: Properly configured for data endpoints
2. **HTTPS Only**: All traffic encrypted via CloudFront
3. **No Secrets in Code**: All deployment tokens in environment variables
4. **Content Security Policy**: Configured at CloudFront level

## Cost Optimization

- **Vercel**: Free tier for Next.js
- **Azure Static Web Apps**: Free tier includes 100GB bandwidth
- **Netlify**: Free tier for static sites
- **AWS**: CloudFront and Lambda@Edge are pay-per-use
- **Scaling to Zero**: All services scale down when not in use

## Rollback Procedures

```bash
# SST
npx sst rollback --stage production

# Vercel
vercel rollback

# Azure
az staticwebapp deployment list --name austin-resume-react
# Then redeploy previous version

# Netlify
netlify rollback
```

## Architecture Benefits

1. **Multi-Cloud Resilience**: No single point of failure
2. **Framework Flexibility**: Demonstrate same content in different frameworks
3. **Centralized Data**: Single source of truth for content
4. **Independent Deployments**: Each variant can be updated independently
5. **Performance**: Edge caching via CloudFront
6. **Cost Effective**: Leverages free tiers across providers

## Future Enhancements

1. Add more framework variants (Vue, Angular, Solid)
2. Implement A/B testing at CloudFront level
3. Add analytics to compare framework performance
4. Implement progressive enhancement strategies
5. Add WebAssembly variant
6. Implement edge computing with CloudFront Functions

## Maintenance

- Keep framework dependencies updated
- Monitor CloudFront cache hit ratios
- Review and optimize Lambda@Edge functions
- Regularly test all deployment paths
- Keep deployment scripts in sync with infrastructure changes