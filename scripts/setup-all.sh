#!/bin/bash

# Master setup script for all cloud services
set -e

echo "============================================"
echo "Multi-Framework Resume Platform Setup"
echo "============================================"
echo ""
echo "This script will help you set up:"
echo "1. Azure App Service for Next.js"
echo "2. Azure Static Web Apps for React"
echo "3. Google Cloud Run for TanStack"
echo ""

# Make all scripts executable
chmod +x scripts/*.sh

# Function to check command exists
check_command() {
    if ! command -v $1 &> /dev/null; then
        echo "❌ $1 is not installed"
        return 1
    else
        echo "✅ $1 is installed"
        return 0
    fi
}

echo "Checking prerequisites..."
echo ""

ALL_GOOD=true

check_command "az" || {
    ALL_GOOD=false
    echo "   Install Azure CLI: https://docs.microsoft.com/en-us/cli/azure/install-azure-cli"
}

check_command "gcloud" || {
    ALL_GOOD=false
    echo "   Install Google Cloud SDK: https://cloud.google.com/sdk/docs/install"
}

check_command "node" || {
    ALL_GOOD=false
    echo "   Install Node.js 20+: https://nodejs.org/"
}

check_command "npm" || {
    ALL_GOOD=false
    echo "   Install npm (comes with Node.js)"
}

echo ""

if [ "$ALL_GOOD" = false ]; then
    echo "Please install missing prerequisites and run this script again."
    exit 1
fi

echo "All prerequisites installed!"
echo ""
echo "============================================"
echo "Step 1: Azure Setup"
echo "============================================"
echo ""

read -p "Do you want to set up Azure services? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    echo "Setting up Azure App Service for Next.js..."
    ./scripts/setup-azure-nextjs.sh
    
    echo ""
    echo "Setting up Azure Static Web Apps for React..."
    ./scripts/setup-azure-react.sh
fi

echo ""
echo "============================================"
echo "Step 2: Google Cloud Setup"
echo "============================================"
echo ""

read -p "Do you want to set up Google Cloud Run? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo ""
    ./scripts/setup-gcp-tanstack.sh
fi

echo ""
echo "============================================"
echo "Step 3: Deploy Services"
echo "============================================"
echo ""
echo "Now you can deploy each service using:"
echo ""
echo "Azure Next.js:    ./scripts/deploy-azure-nextjs.sh"
echo "Azure React:      ./scripts/deploy-azure-react.sh"
echo "GCP TanStack:     ./scripts/deploy-gcp-tanstack.sh"
echo ""
echo "Or deploy all at once with: ./scripts/deploy-all.sh"