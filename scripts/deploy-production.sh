#!/bin/bash

# Production Deployment Script for SST Router Architecture
# This script sets up all environment variables and deploys everything

set -e

echo "🚀 SST Router Production Deployment"
echo "==================================="
echo ""

# Configuration - Update these with your actual production URLs
ROUTER_DOMAIN="https://d2li8p8xclq49l.cloudfront.net"  # Your CloudFront URL
# ROUTER_DOMAIN="https://www.austinwallace.ca"         # Or your custom domain

# Origin URLs - Update these with your deployed app URLs
AZURE_NEXT_ORIGIN="https://austin-site-seven.vercel.app"
AZURE_REACT_ORIGIN="https://gray-pebble-049c9b91e.1.azurestaticapps.net"
GCP_TANSTACK_ORIGIN="https://austin-site.netlify.app"

echo "📋 Configuration:"
echo "  Router Domain: $ROUTER_DOMAIN"
echo "  Next.js Origin: $AZURE_NEXT_ORIGIN"
echo "  React Origin: $AZURE_REACT_ORIGIN"
echo "  TanStack Origin: $GCP_TANSTACK_ORIGIN"
echo ""

# Export environment variables for SST
export AZURE_NEXT_ORIGIN
export AZURE_REACT_ORIGIN
export GCP_TANSTACK_ORIGIN

echo "1️⃣  Deploying framework apps with proper DATA_URL..."
echo ""

# Deploy Next.js with DATA_URL
echo "Deploying Next.js to Vercel..."
cd variants/nextjs-azure
export NEXT_PUBLIC_DATA_URL="$ROUTER_DOMAIN/data/resume.json"
npm run build
vercel --prod --build-env NEXT_PUBLIC_DATA_URL="$ROUTER_DOMAIN/data/resume.json"
cd ../..

# Deploy React with DATA_URL
echo ""
echo "Deploying React to Azure..."
cd variants/react-azure
export VITE_DATA_URL="$ROUTER_DOMAIN/data/resume.json"
npm run build
# For Azure Static Web Apps deployment:
# swa deploy ./dist --deployment-token $AZURE_SWA_DEPLOYMENT_TOKEN --env production
echo "⚠️  Note: Manual Azure deployment may be needed via portal or GitHub Actions"
cd ../..

# Deploy TanStack with DATA_URL
echo ""
echo "Deploying TanStack to Netlify..."
cd variants/tanstack-gcp
export VITE_DATA_URL="$ROUTER_DOMAIN/data/resume.json"
npm run build
netlify deploy --prod --dir=dist
cd ../..

echo ""
echo "2️⃣  Deploying SST with Router configuration..."
echo ""

# Deploy SST
AWS_PROFILE=prod npx sst deploy --stage production

echo ""
echo "3️⃣  Running smoke tests..."
echo ""

# Wait a bit for CloudFront to propagate
echo "Waiting 30 seconds for CloudFront propagation..."
sleep 30

# Run smoke tests
./scripts/test-routes.sh "$ROUTER_DOMAIN"

echo ""
echo "==================================="
echo "✅ Deployment Complete!"
echo ""
echo "Access your site at: $ROUTER_DOMAIN"
echo ""
echo "Framework routes:"
echo "  • Next.js: $ROUTER_DOMAIN/azure/next"
echo "  • React: $ROUTER_DOMAIN/azure/react"
echo "  • TanStack: $ROUTER_DOMAIN/gcp/tanstack"
echo "  • Data API: $ROUTER_DOMAIN/data/resume.json"
echo "==================================="