#!/bin/bash

# Deploy all services using FREE tiers
set -e

echo "============================================"
echo "Deploying All Services (FREE TIER)"
echo "============================================"
echo ""
echo "This will deploy:"
echo "- Next.js → Vercel (free)"
echo "- React → Azure Static Web Apps (free)"
echo "- TanStack → Render.com (free)"
echo ""

# Make scripts executable
SCRIPT_DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" && pwd )"
chmod +x "$SCRIPT_DIR"/*.sh 2>/dev/null || true

# Track URLs
NEXTJS_URL=""
REACT_URL=""
TANSTACK_URL=""

# Deploy React to Azure Static Web Apps (truly free)
echo "1. Deploying React to Azure Static Web Apps..."
echo "----------------------------------------------"
if [ -f .env.azure ]; then
    ./scripts/deploy-azure-react.sh
    REACT_URL="https://austin-resume-react.azurestaticapps.net"
    echo "✅ React deployed successfully"
else
    echo "⚠️  Need to run setup-azure-react.sh first"
    echo "Running setup now..."
    ./scripts/setup-azure-react.sh
    echo "Then run: ./scripts/deploy-azure-react.sh"
fi
echo ""

# Deploy Next.js to Vercel
echo "2. Deploying Next.js to Vercel..."
echo "----------------------------------"
echo "Run: ./scripts/deploy-free-nextjs-vercel.sh"
echo "This requires manual interaction with Vercel CLI"
NEXTJS_URL="https://austin-resume-nextjs.vercel.app"
echo ""

# Deploy TanStack to Render
echo "3. Setting up TanStack for Render..."
echo "-------------------------------------"
./scripts/deploy-free-tanstack-render.sh
TANSTACK_URL="https://austin-resume-tanstack.onrender.com"
echo ""

echo "============================================"
echo "Deployment Summary"
echo "============================================"
echo ""
echo "Expected URLs after deployment:"
echo ""
echo "React (Azure):     $REACT_URL"
echo "Next.js (Vercel):  $NEXTJS_URL"  
echo "TanStack (Render): $TANSTACK_URL"
echo ""
echo "============================================"
echo "Next Steps"
echo "============================================"
echo ""
echo "1. Complete manual deployments:"
echo "   - Vercel: ./scripts/deploy-free-nextjs-vercel.sh"
echo "   - Render: Follow instructions from deploy-free-tanstack-render.sh"
echo ""
echo "2. Update your SST config with these URLs:"
echo ""
echo "export AZURE_NEXT_ORIGIN=\"$NEXTJS_URL\""
echo "export AZURE_REACT_ORIGIN=\"$REACT_URL\""
echo "export GCP_TANSTACK_ORIGIN=\"$TANSTACK_URL\""
echo ""
echo "3. Deploy SST:"
echo "npx sst deploy --stage production"