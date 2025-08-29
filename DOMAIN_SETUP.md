# Setting up austinwallace.ca with GoDaddy

## Current Setup
- **CloudFront Distribution**: dkvegx9yiglsd.cloudfront.net
- **Current Live Site**: https://dkvegx9yiglsd.cloudfront.net

## GoDaddy DNS Configuration

### Step 1: Log into GoDaddy
1. Go to https://www.godaddy.com
2. Sign in to your account
3. Navigate to "My Products" → "Domains"
4. Click "Manage" next to austinwallace.ca
5. Select "DNS" or "Manage DNS"

### Step 2: Remove Default Records
Delete any existing A records or CNAME records for @ and www

### Step 3: Add DNS Records

#### For www.austinwallace.ca:
- **Type**: CNAME
- **Name**: www
- **Value**: dkvegx9yiglsd.cloudfront.net
- **TTL**: 600 seconds (or 1 hour)

#### For austinwallace.ca (root domain):
Since GoDaddy doesn't support ALIAS records, you have two options:

**Option A: Use GoDaddy Forwarding (Easiest)**
1. Go to "Forwarding" section in GoDaddy DNS
2. Set up domain forwarding:
   - Forward to: https://www.austinwallace.ca
   - Forward type: Permanent (301)
   - Settings: Forward with masking OFF

**Option B: Use GoDaddy's IP redirect**
1. Add an A record:
   - **Type**: A
   - **Name**: @
   - **Value**: Use GoDaddy's forwarding IP (typically 50.63.202.1)
   - **TTL**: 600 seconds

### Step 4: SSL Certificate
CloudFront automatically provides SSL for:
- www.austinwallace.ca (via CNAME)
- The root domain will redirect to www

### Step 5: Wait for DNS Propagation
- DNS changes can take 5 minutes to 48 hours to propagate
- You can check status at: https://www.whatsmydns.net/

## Alternative: Move DNS to Route53 (Recommended for AWS)

If you want better AWS integration:

1. Create a hosted zone in Route53 for austinwallace.ca
2. Update nameservers in GoDaddy to point to Route53
3. Use Route53's ALIAS records for both root and www
4. This allows both austinwallace.ca and www.austinwallace.ca to work directly

## Testing Your Domain

Once DNS is configured, test:
```bash
# Check DNS resolution
dig www.austinwallace.ca
nslookup www.austinwallace.ca

# Test the site
curl -I https://www.austinwallace.ca
```

## Next Steps

After DNS is configured, we need to:
1. Update CloudFront distribution to accept austinwallace.ca and www.austinwallace.ca as alternate domain names
2. Add SSL certificate for the custom domain (ACM certificate)

Run this command to update the deployment with custom domain:
```bash
AWS_PROFILE=prod npx sst deploy --stage production
```

This will configure CloudFront to accept traffic for your domain.