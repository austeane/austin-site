#!/bin/bash

# SST Router Smoke Test Script
# Tests all routes through the CloudFront distribution
# Usage: ./scripts/test-routes.sh [router-domain]

set -e

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Get router domain from argument or use default
ROUTER_DOMAIN=${1:-"https://d2li8p8xclq49l.cloudfront.net"}

echo "🔍 Testing SST Router Routes"
echo "================================"
echo "Router Domain: $ROUTER_DOMAIN"
echo "================================"
echo ""

# Function to test a route
test_route() {
    local path=$1
    local description=$2
    local expected_status=${3:-200}
    
    printf "Testing %-30s" "$path"
    
    # Get HTTP status code (with -L to follow redirects)
    status=$(curl -sL -o /dev/null -w "%{http_code}" "$ROUTER_DOMAIN$path")
    
    if [ "$status" = "$expected_status" ]; then
        echo -e " ${GREEN}✅ $status OK${NC} - $description"
        return 0
    else
        echo -e " ${RED}❌ $status${NC} - Expected $expected_status - $description"
        return 1
    fi
}

# Function to test with headers
test_route_headers() {
    local path=$1
    local description=$2
    
    printf "Testing %-30s" "$path (headers)"
    
    # Get response headers using GET instead of HEAD for accurate CORS headers
    headers=$(curl -sL -D - -o /dev/null "$ROUTER_DOMAIN$path")
    
    # Check for CORS header
    if echo "$headers" | grep -qi "access-control-allow-origin"; then
        echo -e " ${GREEN}✅ CORS${NC} - $description"
        return 0
    else
        echo -e " ${YELLOW}⚠️  No CORS${NC} - $description"
        return 1
    fi
}

# Counter for failures
failures=0

echo "🏠 Main Routes"
echo "-------------"
test_route "/" "SvelteKit homepage" || ((failures++))
test_route "/enablement" "SvelteKit enablement page" || ((failures++))

echo ""
echo "📊 Data Routes"
echo "-------------"
test_route "/data/resume.json" "Shared resume data" || ((failures++))
test_route_headers "/data/resume.json" "CORS headers present" || ((failures++))

echo ""
echo "🎨 Framework Variants"
echo "--------------------"
test_route "/azure/next" "Next.js on Vercel" || ((failures++))

# Discover actual Next.js asset from HTML (using extended regex)
next_asset=$(curl -sL "$ROUTER_DOMAIN/azure/next" | grep -oE '/azure/next/_next/[^"]+\.(js|css)' | head -n1)
if [ -n "$next_asset" ]; then
    ct=$(curl -sLI "$ROUTER_DOMAIN$next_asset" | tr -d '\r' | awk -F': ' '/[Cc]ontent-[Tt]ype/{print $2}' | head -n1)
    if echo "$ct" | grep -qiE 'javascript|css|font|image'; then
        echo -e " ${GREEN}✅ Next.js asset OK${NC} (content-type: $ct)"
    else
        echo -e " ${RED}❌ Next.js asset wrong type${NC} (got: $ct for $next_asset)"
        ((failures++))
    fi
else
    echo -e " ${YELLOW}⚠️  Could not find Next.js asset${NC}"
    ((failures++))
fi

test_route "/azure/react" "React on Azure" || ((failures++))
test_route "/gcp/tanstack" "TanStack on Netlify" || ((failures++))

echo ""
echo "🧩 AI Variants present under each deployment"
echo "-------------------------------------------"
test_route "/azure/next/variants/claude-code/index.html" "Next hosts AI variants" || ((failures++))
test_route "/azure/react/variants/claude-code/index.html" "React hosts AI variants" || ((failures++))
test_route "/gcp/tanstack/variants/claude-code/index.html" "TanStack hosts AI variants" || ((failures++))

echo ""
echo "🧪 Asset MIME checks"
echo "--------------------"
asset_mime_check() {
  local page="$1"
  local label="$2"
  local css=$(curl -sL "$ROUTER_DOMAIN$page" | grep -o "$page/assets/[^\"']\+\.css" | head -n1)
  if [ -z "$css" ]; then
    echo -e " ${YELLOW}⚠️  No CSS discovered on $label${NC}"
    return 1
  fi
  local ct=$(curl -sLI "$ROUTER_DOMAIN$css" | tr -d '\r' | awk -F': ' '/[Cc]ontent-[Tt]ype/{print $2}')
  if echo "$ct" | grep -qi 'text/css'; then
    echo -e " ${GREEN}✅ $label CSS content-type OK ($ct)${NC}"
    return 0
  else
    echo -e " ${RED}❌ $label CSS wrong content-type ($ct)${NC}"
    return 1
  fi
}
asset_mime_check "/azure/react" "React (Azure)" || ((failures++))
asset_mime_check "/gcp/tanstack" "TanStack (Netlify)" || ((failures++))

echo ""
echo "================================"
if [ $failures -eq 0 ]; then
    echo -e "${GREEN}✅ All tests passed!${NC}"
else
    echo -e "${RED}❌ $failures test(s) failed${NC}"
    echo ""
    echo "Common issues to check:"
    echo "1. Ensure all framework apps are deployed to their origins"
    echo "2. Check that origins are publicly accessible (no auth)"
    echo "3. Verify SST deployment completed successfully"
    echo "4. Confirm CloudFront distribution has propagated (~5-10 mins)"
fi
echo "================================"

# Return non-zero if any tests failed
exit $failures
