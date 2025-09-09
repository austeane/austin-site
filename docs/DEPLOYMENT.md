# Deployment Guide

## Prerequisites

### Required Tools
- Node.js 18+ and npm
- AWS CLI configured with production credentials
- Vercel CLI (auto-installed via npx)
- Netlify CLI (auto-installed via npx)
- Azure Static Web Apps CLI (auto-installed via npx)
- SST (Serverless Stack) v2

### Environment Setup
```bash
# AWS credentials
export AWS_PROFILE=prod

# Azure deployment token (get from Azure Portal)
export AZURE_SWA_DEPLOYMENT_TOKEN="your-token-here"

# Framework deployment URLs (update after first deploy)
export AZURE_NEXT_ORIGIN="https://austin-site-seven.vercel.app"
export AZURE_REACT_ORIGIN="https://gray-pebble-049c9b91e.1.azurestaticapps.net"
export GCP_TANSTACK_ORIGIN="https://austin-site.netlify.app"
```

## Quick Deploy

### Deploy Everything
```bash
# Sync AI variants to all framework apps
./scripts/sync-variants.sh

# Deploy all framework apps
./scripts/deploy-all.sh

# Deploy SST Router with updated origins
AWS_PROFILE=prod npx sst deploy --stage production
```

### Test Deployment
```bash
./scripts/test-routes.sh "https://d2li8p8xclq49l.cloudfront.net"
```

### Spot‑check Deep Links
Verify variant‑preserving navigation into external apps (resume + enablement):
```bash
base=https://d2li8p8xclq49l.cloudfront.net
for tool in claude-code gpt-5-pro lovable; do
  for deploy in /azure/next /azure/react /gcp/tanstack; do
    for suffix in "/index.html" "/enablement/index.html"; do
      url="$base$deploy/variants/$tool$suffix"; echo "$url"; curl -s -o /dev/null -w "%{http_code}\n" "$url";
    done
  done
done
```

## Individual Deployments

### Main SvelteKit Application (SST)
```bash
# Build and deploy to AWS Lambda
AWS_PROFILE=prod npx sst deploy --stage production

# If deployment is locked
AWS_PROFILE=prod npx sst unlock --stage production
```

### Next.js on Vercel
```bash
cd variants/nextjs-azure

# Development
npm run dev

# Production deploy (automatic from GitHub)
vercel --prod

# Manual production deploy
npm run build && vercel --prod --yes
```

### React on Azure Static Web Apps
```bash
cd variants/react-azure

# Development
npm run dev

# Build for production
npm run build

# Deploy to Azure
npx @azure/static-web-apps-cli deploy \
  ./dist \
  --app-name gray-pebble-049c9b91e \
  --deployment-token=$AZURE_SWA_DEPLOYMENT_TOKEN \
  --env production
```

### TanStack on Netlify
```bash
cd variants/tanstack-gcp

# Development
npm run dev

# Build for production
npm run build

# Deploy to Netlify
netlify deploy --prod --dir=dist
```

## Deployment Scripts

### sync-variants.sh
Copies AI variant HTML files to all framework apps:
```bash
./scripts/sync-variants.sh
```

### deploy-all.sh
Deploys all three framework apps:
```bash
./scripts/deploy-all.sh
```

### deploy-azure-react.sh
Individual React deployment:
```bash
./scripts/deploy-azure-react.sh
```

### deploy-tanstack-netlify.sh
Individual TanStack deployment:
```bash
./scripts/deploy-tanstack-netlify.sh
```

### test-routes.sh
Tests all routes through CloudFront:
```bash
./scripts/test-routes.sh "https://d2li8p8xclq49l.cloudfront.net"
```

## Configuration Files

### SST Configuration (sst.config.ts)
```typescript
// Main router configuration
const router = new sst.aws.Router("Router", {
  domain: {
    name: "www.austinwallace.ca",
    dns: false,
    cert: "arn:aws:acm:us-east-1:737679990662:certificate/..."
  },
  routes: {
    "/*": sveltekit.url,
    "/azure/next": process.env.AZURE_NEXT_ORIGIN,
    "/azure/react": process.env.AZURE_REACT_ORIGIN,
    "/gcp/tanstack": process.env.GCP_TANSTACK_ORIGIN
  }
});
```

### Next.js Configuration (next.config.js)
```javascript
module.exports = {
  basePath: '/azure/next',
  output: process.env.VERCEL ? undefined : 'standalone',
  // ... other config
};
```

### React Vite Configuration (vite.config.ts)
```javascript
export default defineConfig({
  base: '/azure/react/',
  build: {
    outDir: 'dist/azure/react',
    // ... other config
  }
});
```

### TanStack Vite Configuration (vite.config.ts)
```javascript
export default defineConfig({
  base: '/gcp/tanstack/',
  // ... other config
});
```

### Azure Static Web Apps (staticwebapp.config.json)
```json
{
  "navigationFallback": {
    "rewrite": "/index.html",
    "exclude": ["/azure/react/assets/*"]
  },
  "routes": [
    {
      "route": "/azure/react/assets/*",
      "rewrite": "/assets/{*path}"
    }
  ],
  "forwardingGateway": {
    "allowedForwardedHosts": [
      "d2li8p8xclq49l.cloudfront.net",
      "www.austinwallace.ca"
    ]
  }
}
```

### Netlify Configuration (netlify.toml)
```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/gcp/tanstack/assets/*"
  to = "/assets/:splat"
  status = 200

[[redirects]]
  from = "/gcp/tanstack/variants/*"
  to = "/variants/:splat"
  status = 200

[[redirects]]
  from = "/gcp/tanstack/*"
  to = "/index.html"
  status = 200
```

## Deployment Checklist

### Before Deployment
- [ ] Run tests: `npm test`
- [ ] Validate variants: `npm run validate:variants`
- [ ] Update variant HTML files if needed
- [ ] Sync variants: `./scripts/sync-variants.sh`
- [ ] Check environment variables are set

### During Deployment
- [ ] Deploy framework apps first
- [ ] Note the deployment URLs
- [ ] Update environment variables with new URLs
- [ ] Deploy SST with updated origins

### After Deployment
- [ ] Run route tests: `./scripts/test-routes.sh`
- [ ] Check CloudFront distribution
- [ ] Test AI variants load correctly
- [ ] Spot‑check deep‑link variant routes under each deployment (see above)
- [ ] Verify CORS headers on data endpoints
- [ ] Clear CloudFront cache if needed

## Troubleshooting

### SST Deployment Locked
```bash
AWS_PROFILE=prod npx sst unlock --stage production
```

### CloudFront Cache Issues
```bash
# Invalidate CloudFront cache
aws cloudfront create-invalidation \
  --distribution-id E2LI8P8XCLQ49L \
  --paths "/*"
```

### CORS Errors
1. Check SST is deployed with latest configuration
2. Verify `/data/*.json` endpoints return proper headers
3. Test directly: `curl -I https://www.austinwallace.ca/data/resume.json`

### 404 Errors on Framework Routes
1. Verify SST Router configuration uses prefix matching
2. Check framework base paths are configured
3. Ensure deployment URLs in environment variables are current

### Azure SWA Deployment Fails
1. Verify deployment token is valid
2. Check `staticwebapp.config.json` is in dist folder
3. Ensure `forwardingGateway` includes CloudFront domain

### Netlify Deployment Issues
1. Check `netlify.toml` redirect rules
2. Verify base path in Vite config
3. Ensure `_redirects` file is generated in dist

## Production URLs

### Main Site
- CloudFront: https://d2li8p8xclq49l.cloudfront.net
- Custom Domain: https://www.austinwallace.ca

### Framework Deployments
- Next.js: https://austin-site-seven.vercel.app
- React: https://gray-pebble-049c9b91e.1.azurestaticapps.net
- TanStack: https://austin-site.netlify.app

### Accessible Routes
- Homepage: https://www.austinwallace.ca/
- Enablement: https://www.austinwallace.ca/enablement
- Data API: https://www.austinwallace.ca/data/resume.json
- Next.js App: https://www.austinwallace.ca/azure/next
- React App: https://www.austinwallace.ca/azure/react
- TanStack App: https://www.austinwallace.ca/gcp/tanstack

## Monitoring

### Health Checks
```bash
# Test all routes
./scripts/test-routes.sh "https://www.austinwallace.ca"

# Check specific endpoint
curl -I https://www.austinwallace.ca/data/resume.json
```

### Logs
- **SST/Lambda**: CloudWatch Logs in AWS Console
- **Vercel**: Vercel Dashboard → Functions tab
- **Azure SWA**: Azure Portal → Static Web App → Monitoring
- **Netlify**: Netlify Dashboard → Functions tab

## Rollback Procedures

### SST Rollback
```bash
# List recent deployments
AWS_PROFILE=prod npx sst list --stage production

# Rollback to previous version
AWS_PROFILE=prod npx sst rollback --stage production
```

### Vercel Rollback
Use Vercel Dashboard → Deployments → Promote previous deployment

### Azure SWA Rollback
Use Azure Portal → Deployment History → Revert

### Netlify Rollback
Use Netlify Dashboard → Deploys → Publish previous deploy

## Security Notes

- Never commit deployment tokens to git
- Use environment variables for sensitive data
- Rotate deployment tokens regularly
- Keep AWS credentials secure
- Use least-privilege IAM policies

## Support

For issues or questions:
- Check [Architecture Overview](./ARCHITECTURE.md) for system overview
- Review [CLAUDE.md](../CLAUDE.md) for AI assistant context
- See [README.md](../README.md) for project setup

