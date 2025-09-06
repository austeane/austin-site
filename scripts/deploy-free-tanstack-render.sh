#!/bin/bash

# Deploy TanStack to Render.com (FREE)
set -e

echo "==================================="
echo "Deploying TanStack to Render.com (FREE)"
echo "==================================="
echo ""
echo "This script will prepare your TanStack app for Render deployment"
echo ""

cd variants/tanstack-gcp

# Create render.yaml for easy deployment
cat > render.yaml << 'EOF'
services:
  - type: web
    name: austin-resume-tanstack
    runtime: node
    buildCommand: npm install && npm run build
    startCommand: npm start
    envVars:
      - key: NODE_ENV
        value: production
      - key: PORT
        value: 10000
    routes:
      - type: rewrite
        source: /gcp/tanstack/*
        destination: /*
EOF

echo "Created render.yaml configuration"
echo ""
echo "==================================="
echo "Manual Steps to Complete Deployment:"
echo "==================================="
echo ""
echo "1. Create a Render account (free): https://render.com/register"
echo ""
echo "2. Connect your GitHub account"
echo ""
echo "3. Go to: https://dashboard.render.com/select-repo?type=web"
echo ""
echo "4. Select your repository"
echo ""
echo "5. Configure the service:"
echo "   - Name: austin-resume-tanstack"
echo "   - Region: Oregon (US West)"
echo "   - Branch: main"
echo "   - Runtime: Node"
echo "   - Build Command: npm install && npm run build"
echo "   - Start Command: npm start"
echo ""
echo "6. Click 'Create Web Service'"
echo ""
echo "7. Your app will be available at:"
echo "   https://austin-resume-tanstack.onrender.com"
echo ""
echo "Note: Free tier services sleep after 15 min of inactivity"
echo "First request after sleep takes ~30 seconds"