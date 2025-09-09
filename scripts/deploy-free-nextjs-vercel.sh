#!/bin/bash

# Deploy Next.js to Vercel (FREE)
set -e

echo "==================================="
echo "Deploying Next.js to Vercel (FREE)"
echo "==================================="
echo ""
echo "Prerequisites:"
echo "1. Install Vercel CLI: npm i -g vercel"
echo "2. Login to Vercel: vercel login"
echo ""

# Ensure six AI variants are copied into this app
echo "Syncing AI variants into Next.js public/variants..."
./scripts/sync-variants.sh

cd variants/nextjs-azure

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm i -g vercel
fi

echo "Deploying to Vercel..."
echo ""
echo "When prompted:"
echo "- Set up and deploy: Y"
echo "- Which scope: Select your account"
echo "- Link to existing project?: N (first time) or Y (subsequent)"
echo "- Project name: austin-resume-nextjs"
echo "- Directory: ./"
echo "- Override settings: N"
echo ""

# Deploy with production flag for a stable URL
vercel --prod

echo ""
echo "==================================="
echo "Deployment Complete!"
echo "==================================="
echo ""
echo "Your Next.js app is now live on Vercel!"
echo "URL will be shown above (e.g., https://austin-resume-nextjs.vercel.app)"
echo ""
echo "Save this URL for SST config!"