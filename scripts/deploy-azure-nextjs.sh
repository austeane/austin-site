#!/bin/bash

# Deploy Next.js to Azure App Service
set -e

echo "==================================="
echo "Deploying Next.js to Azure App Service"
echo "==================================="

APP_NAME="austin-resume-next"
RESOURCE_GROUP="austin-resume-rg"

cd variants/nextjs-azure

# Ensure dependencies are installed before building
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

echo "Building Next.js app..."
npm run build

echo "Creating deployment package..."
# Create a zip with the standalone build
zip -r deploy.zip \
    .next/standalone/* \
    .next/static \
    public \
    package.json \
    package-lock.json \
    -x "*.git*" \
    -x "node_modules/*" \
    -x ".env*"

echo "Deploying to Azure..."
az webapp deployment source config-zip \
    --resource-group $RESOURCE_GROUP \
    --name $APP_NAME \
    --src deploy.zip

echo "Cleaning up..."
rm deploy.zip

echo ""
echo "Deployment complete!"
echo "View at: https://$APP_NAME.azurewebsites.net"
echo "Note: It may take a minute for the app to start."
