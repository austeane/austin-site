#!/bin/bash

# Deploy TanStack to Netlify
set -e

echo "==================================="
echo "Deploying TanStack to Netlify"
echo "==================================="
echo ""

cd variants/tanstack-gcp

# Ensure dependencies are installed for reproducible builds
if [ -f package-lock.json ]; then
  npm ci
else
  npm install
fi

# Check if Netlify CLI is installed
if ! command -v netlify &> /dev/null; then
    echo "Installing Netlify CLI..."
    npm install -g netlify-cli
fi

# Build the project
echo "Building TanStack app..."
npm run build

# Ensure redirects are included in the published folder (works with CLI deploys)
echo "Creating Netlify _redirects in dist..."
cat > dist/_redirects << 'EOF'
/gcp/tanstack/assets/*  /assets/:splat  200
/gcp/tanstack/*         /index.html     200
EOF

# (Optional) also include security headers
printf "/*\n  X-Frame-Options: SAMEORIGIN\n  X-Content-Type-Options: nosniff\n  X-XSS-Protection: 1; mode=block\n" > dist/_headers

# Deploy to Netlify
echo "Deploying to Netlify..."
echo ""
echo "First, make sure you're logged in:"
netlify login
echo ""
echo "Now deploying..."
echo "If this is your first deployment:"
echo "- Choose 'Create & configure a new site'"
echo "- Team: Select your team"
echo "- Site name: austin-resume-tanstack (or leave blank)"
echo ""

netlify deploy --prod --dir=dist

echo ""
echo "==================================="
echo "Deployment Complete!"
echo "==================================="
echo ""
echo "Your TanStack app is now live on Netlify!"
echo "URL will be shown above (e.g., https://austin-resume-tanstack.netlify.app)"
echo ""
echo "Save this URL for SST config!"
