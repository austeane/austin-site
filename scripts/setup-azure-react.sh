#!/bin/bash

# Azure Static Web Apps Setup for React
set -e

echo "==================================="
echo "Azure Static Web Apps Setup for React"
echo "==================================="

# Configuration
RESOURCE_GROUP="austin-resume-rg"
LOCATION="westus2"
APP_NAME="austin-resume-react"

echo ""
echo "Configuration:"
echo "- Resource Group: $RESOURCE_GROUP"
echo "- Location: $LOCATION"
echo "- App Name: $APP_NAME"
echo ""

# Check if logged in to Azure
echo "Checking Azure login status..."
if ! az account show >/dev/null 2>&1; then
    echo "Not logged in to Azure. Running 'az login'..."
    az login
fi

ACCOUNT_NAME=$(az account show --query name -o tsv)
echo "Logged in to Azure account: $ACCOUNT_NAME"
echo ""

# Create Resource Group (if it doesn't exist)
echo "Ensuring Resource Group exists..."
az group create \
    --name $RESOURCE_GROUP \
    --location $LOCATION \
    --output table

# Create Static Web App
echo "Creating Static Web App..."
az staticwebapp create \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --location $LOCATION \
    --sku Free \
    --output table

# Get deployment token
echo "Getting deployment token..."
DEPLOYMENT_TOKEN=$(az staticwebapp secrets list \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --query properties.apiKey -o tsv)

# Get the app URL
APP_URL=$(az staticwebapp show \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --query defaultHostname -o tsv)

echo ""
echo "==================================="
echo "Azure Static Web Apps Setup Complete!"
echo "==================================="
echo ""
echo "App URL: https://$APP_URL"
echo ""
echo "Deployment Token (save this securely):"
echo "$DEPLOYMENT_TOKEN"
echo ""
echo "To deploy:"
echo "1. Install SWA CLI: npm install -g @azure/static-web-apps-cli"
echo "2. cd variants/react-azure"
echo "3. npm run build"
echo "4. swa deploy ./dist --deployment-token $DEPLOYMENT_TOKEN"
echo ""
echo "Or use the deploy script: ./scripts/deploy-azure-react.sh"
echo ""
echo "Save this URL for SST config:"
echo "AZURE_REACT_ORIGIN=https://$APP_URL"

# Save token to .env file (gitignored)
echo ""
echo "Saving deployment token to .env.azure..."
echo "AZURE_SWA_DEPLOYMENT_TOKEN=$DEPLOYMENT_TOKEN" > .env.azure
echo "Token saved to .env.azure (add this file to .gitignore!)"