#!/bin/bash

# Azure App Service Setup for Next.js
# Run this script to set up Azure App Service for the Next.js variant

set -e

echo "==================================="
echo "Azure App Service Setup for Next.js"
echo "==================================="

# Configuration
RESOURCE_GROUP="austin-resume-rg"
LOCATION="westus2"
APP_NAME="austin-resume-next"
PLAN_NAME="austin-resume-plan"

echo ""
echo "Configuration:"
echo "- Resource Group: $RESOURCE_GROUP"
echo "- Location: $LOCATION"
echo "- App Name: $APP_NAME"
echo "- Plan Name: $PLAN_NAME"
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

# Create Resource Group
echo "Creating Resource Group..."
az group create \
    --name $RESOURCE_GROUP \
    --location $LOCATION \
    --output table

# Create App Service Plan (B1 tier for testing, can upgrade later)
echo "Creating App Service Plan..."
az appservice plan create \
    --name $PLAN_NAME \
    --resource-group $RESOURCE_GROUP \
    --location $LOCATION \
    --sku B1 \
    --is-linux \
    --output table

# Create Web App with Node 20 runtime
echo "Creating Web App..."
az webapp create \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --plan $PLAN_NAME \
    --runtime "NODE:20-lts" \
    --output table

# Configure app settings
echo "Configuring app settings..."
az webapp config appsettings set \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --settings \
        PORT=8080 \
        NODE_ENV=production \
        WEBSITE_NODE_DEFAULT_VERSION="~20" \
    --output table

# Enable continuous deployment from local git
echo "Configuring deployment..."
az webapp deployment source config-local-git \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --output table

# Get deployment credentials
echo ""
echo "Getting deployment URL..."
DEPLOYMENT_URL=$(az webapp deployment source config-local-git \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --query url -o tsv)

# Get the app URL
APP_URL=$(az webapp show \
    --name $APP_NAME \
    --resource-group $RESOURCE_GROUP \
    --query defaultHostName -o tsv)

echo ""
echo "==================================="
echo "Azure App Service Setup Complete!"
echo "==================================="
echo ""
echo "App URL: https://$APP_URL"
echo "Deployment Git URL: $DEPLOYMENT_URL"
echo ""
echo "To deploy:"
echo "1. cd variants/nextjs-azure"
echo "2. git remote add azure $DEPLOYMENT_URL"
echo "3. git push azure main"
echo ""
echo "Or use the deploy script: ./scripts/deploy-azure-nextjs.sh"
echo ""
echo "Save this URL for SST config:"
echo "AZURE_NEXT_ORIGIN=https://$APP_URL"