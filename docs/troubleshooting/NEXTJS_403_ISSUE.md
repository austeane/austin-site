# Next.js Variant 403 Error - Investigation Report

## Problem Description

The Next.js variant deployed on Vercel (https://austin-site-seven.vercel.app) fails to fetch resume data from the main site's API endpoint, resulting in a "Failed to load resume: HTTP 403" error on the `/azure/next/resume_ssr` route.

## Current Status

- **Main site**: ✅ Working perfectly at https://www.austinwallace.ca
- **Data endpoint**: ✅ Accessible at https://www.austinwallace.ca/data/resume.json
- **Next.js variant**: ❌ Shows 403 error when fetching data server-side

## Investigation Summary

### 1. Environment Variables ✅
- Confirmed `NEXT_DATA_ORIGIN` is set in Vercel production environment
- Added `NEXT_PUBLIC_DATA_ORIGIN` as additional fallback
- Both are set to `https://www.austinwallace.ca`

### 2. Code Updates ✅
Updated `src/pages/resume_ssr.tsx` with:
- Better error handling in `getServerSideProps`
- Multiple fallback URLs
- Debug logging
- Hardcoded fallback to `https://www.austinwallace.ca`

### 3. CORS Configuration ✅
- Verified CORS headers are present: `access-control-allow-origin: *`
- Browser-side fetch fails due to CORS (expected for cross-origin)
- Server-side fetch should work but gets 403

### 4. Direct Testing ✅
```bash
# Works from local machine
curl https://www.austinwallace.ca/data/resume.json  # ✅ 200 OK

# Works with node-fetch user agent
curl -H "User-Agent: node-fetch" https://www.austinwallace.ca/data/resume.json  # ✅ 200 OK
```

### 5. Deployment Verification
- Deployed multiple times with updated code
- Verified deployment completes successfully
- Issue persists across all deployments

## Root Cause Analysis

The 403 error appears to be caused by CloudFront or AWS WAF blocking requests from Vercel's server IPs. Evidence:

1. **Direct curl requests work** from local machines
2. **Server-side fetch fails** from Vercel's servers
3. **403 Forbidden** indicates access control, not CORS
4. **CloudFront is in the path** (x-cache headers confirm this)

## Attempted Solutions

### ✅ Completed
1. Added environment variables (NEXT_DATA_ORIGIN, NEXT_PUBLIC_DATA_ORIGIN)
2. Updated fetch logic with better error handling
3. Added multiple fallback URLs
4. Deployed with hardcoded URL fallback
5. Created test API endpoint for debugging
6. Verified CORS headers are present

### ❌ Not Working
- Server-side fetch from Vercel still gets 403
- Client-side fetch blocked by CORS (expected)

## Recommended Solutions

### Option 1: CloudFront/WAF Configuration
Add Vercel's IP ranges to CloudFront allowed list or WAF rules. Vercel's IPs can be found at: https://vercel.com/docs/security/ip-addresses

### Option 2: Build-Time Data
Fetch and embed data at build time instead of runtime:
```javascript
export async function getStaticProps() {
  const res = await fetch('https://www.austinwallace.ca/data/resume.json');
  const data = await res.json();
  return { props: { data }, revalidate: 3600 };
}
```

### Option 3: Proxy Through Next.js
Add a rewrite in `next.config.mjs`:
```javascript
async rewrites() {
  return [
    {
      source: '/api/data/:path*',
      destination: 'https://www.austinwallace.ca/data/:path*',
    },
  ];
}
```

### Option 4: SST Router Configuration
Update SST router to explicitly allow Vercel origins or add specific CORS rules for the `/data/*` routes.

## Files Modified

- `/variants/nextjs-azure/src/pages/resume_ssr.tsx` - Added error handling and fallbacks
- `/variants/nextjs-azure/src/pages/api/test-fetch.ts` - Created debug endpoint
- Vercel environment variables - Added NEXT_DATA_ORIGIN and NEXT_PUBLIC_DATA_ORIGIN

## Next Steps

1. Check CloudFront distribution settings in AWS Console
2. Review WAF rules if enabled
3. Consider implementing Option 2 (build-time data) as most reliable solution
4. Test with SST router CORS configuration updates

## Related Links

- [Vercel IP Addresses](https://vercel.com/docs/security/ip-addresses)
- [CloudFront Access Control](https://docs.aws.amazon.com/cloudfront/latest/developerguide/access-control.html)
- [Next.js Data Fetching](https://nextjs.org/docs/basic-features/data-fetching)

