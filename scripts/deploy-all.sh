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
AZURE_REACT_URL=""
GCP_TANSTACK_URL=""

# Deploy Azure Next.js
echo "1. Deploying Next.js to Azure App Service..."
echo "-------------------------------------------"
if ./scripts/deploy-azure-nextjs.sh; then
    AZURE_NEXT_URL="https://austin-resume-next.azurewebsites.net"
    echo "✅ Next.js deployed successfully"
else
    echo "⚠️  Next.js deployment failed - continuing..."
fi
echo ""

# Deploy Azure React
echo "2. Deploying React to Azure Static Web Apps..."
echo "----------------------------------------------"
if ./scripts/deploy-azure-react.sh; then
    AZURE_REACT_URL="https://austin-resume-react.azurestaticapps.net"
    echo "✅ React deployed successfully"
else
    echo "⚠️  React deployment failed - continuing..."
fi
echo ""

# Deploy GCP TanStack
echo "3. Deploying TanStack to Google Cloud Run..."
echo "--------------------------------------------"
if ./scripts/deploy-gcp-tanstack.sh; then
    # Extract URL from Cloud Run output
    GCP_TANSTACK_URL=$(gcloud run services describe austin-resume-tanstack \
        --region us-central1 \
        --format 'value(status.url)' 2>/dev/null) || true
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

if [ ! -z "$AZURE_REACT_URL" ]; then
    echo "✅ React:     $AZURE_REACT_URL"
else
    echo "❌ React:     Not deployed"
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
echo "export AZURE_REACT_ORIGIN=\"$AZURE_REACT_URL\""
echo "export GCP_TANSTACK_ORIGIN=\"$GCP_TANSTACK_URL\""
echo ""
echo "2. Deploy SST to activate the router:"
echo ""
echo "npx sst deploy"
echo ""
echo "Or for production:"
echo "AWS_PROFILE=prod npx sst deploy --stage production"