#!/bin/bash

# Deploy React to Azure Static Web Apps
set -e

echo "==================================="
echo "Deploying React to Azure Static Web Apps"
echo "==================================="

# Ensure six AI variants are copied into this app
echo "Syncing AI variants into React public/variants..."
./scripts/sync-variants.sh

# Load deployment token from .env.azure if it exists
if [ -f .env.azure ]; then
    source .env.azure
fi

if [ -z "$AZURE_SWA_DEPLOYMENT_TOKEN" ]; then
    echo "Error: AZURE_SWA_DEPLOYMENT_TOKEN not found."
    echo "Run ./scripts/setup-azure-react.sh first or set the token manually."
    exit 1
fi

# Check if SWA CLI is installed
if ! command -v swa &> /dev/null; then
    echo "Installing Azure Static Web Apps CLI..."
    npm install -g @azure/static-web-apps-cli
fi

cd variants/react-azure

# Build directory aligned with vite.config.ts outDir setting
BUILD_DIR="dist/azure/react"

# Ensure dependencies are installed for reproducible builds
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

echo "Building React app..."
npm run build

echo "Copying Static Web Apps config into build directory..."
if [ -f staticwebapp.config.json ]; then
  cp staticwebapp.config.json "$BUILD_DIR/staticwebapp.config.json"
else
  echo "Error: staticwebapp.config.json missing. See variants/react-azure/."
  exit 1
fi

echo "Deploying to Azure Static Web Apps..."
swa deploy "$BUILD_DIR" \
    --deployment-token $AZURE_SWA_DEPLOYMENT_TOKEN \
    --env production

echo ""
echo "Deployment complete!"
echo "View at: https://austin-resume-react.azurestaticapps.net"
