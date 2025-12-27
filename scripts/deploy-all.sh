#!/bin/bash

# Deploy all services
set -e

echo "============================================"
echo "Deploying All Services"
echo "============================================"
echo ""

# Make scripts executable
chmod +x scripts/*.sh

# Track URLs
AZURE_NEXT_URL=""
GCP_TANSTACK_URL=""

# Deploy Next.js to Vercel
echo "1. Deploying Next.js to Vercel..."
echo "-------------------------------------------"
if ./scripts/deploy-azure-nextjs.sh; then
    AZURE_NEXT_URL="https://austin-site-seven.vercel.app"
    echo "✅ Next.js deployed successfully"
else
    echo "⚠️  Next.js deployment failed - continuing..."
fi
echo ""

# Deploy TanStack to Netlify
echo "2. Deploying TanStack to Netlify..."
echo "--------------------------------------------"
if ./scripts/deploy-gcp-tanstack.sh; then
    GCP_TANSTACK_URL="https://austin-site.netlify.app"
    echo "✅ TanStack deployed successfully"
else
    echo "⚠️  TanStack deployment failed - continuing..."
fi

echo ""
echo "============================================"
echo "Deployment Summary"
echo "============================================"
echo ""

if [ ! -z "$AZURE_NEXT_URL" ]; then
    echo "✅ Next.js:   $AZURE_NEXT_URL"
else
    echo "❌ Next.js:   Not deployed"
fi

if [ ! -z "$GCP_TANSTACK_URL" ]; then
    echo "✅ TanStack:  $GCP_TANSTACK_URL"
else
    echo "❌ TanStack:  Not deployed"
fi

echo ""
echo "============================================"
echo "Next Steps"
echo "============================================"
echo ""
echo "1. Update your SST config with these URLs:"
echo ""
echo "export AZURE_NEXT_ORIGIN=\"$AZURE_NEXT_URL\""
echo "export GCP_TANSTACK_ORIGIN=\"$GCP_TANSTACK_URL\""
echo ""
echo "2. Deploy SST to activate the router:"
echo ""
echo "npx sst deploy"
echo ""
echo "Or for production:"
echo "AWS_PROFILE=prod npx sst deploy --stage production"