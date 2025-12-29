/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "austin-site",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
      providers: { aws: { region: "us-east-1" } },
    };
  },
  async run() {
    // S3 bucket for CloudFront access logs
    // Using raw AWS bucket to control ACLs for CloudFront log delivery
    const logsBucket = new aws.s3.BucketV2("AccessLogsBucket", {
      forceDestroy: true,
    });

    // Enable ACLs for CloudFront log delivery (required for standard logging)
    const logsBucketOwnership = new aws.s3.BucketOwnershipControls("LogsBucketOwnership", {
      bucket: logsBucket.id,
      rule: {
        objectOwnership: "BucketOwnerPreferred",
      },
    });

    // Grant CloudFront log delivery write access
    new aws.s3.BucketAclV2("LogsBucketAcl", {
      bucket: logsBucket.id,
      acl: "log-delivery-write",
    }, { dependsOn: [logsBucketOwnership] });

    // 1) One CloudFront+domain for everything via Router
    // Temporarily disabled - domain is still attached to old CloudFront
    // Update GoDaddy DNS to point to: d2li8p8xclq49l.cloudfront.net
    const router = new sst.aws.Router("Edge", {
      domain: {
        name: "www.austinwallace.ca",
        // redirects: ["austinwallace.ca"], // Another CloudFront has this, handle separately
        dns: false, // We'll manage DNS in GoDaddy
        cert: "arn:aws:acm:us-east-1:737679990662:certificate/061f07dc-2e1e-4751-bfee-e7e26c8b7c80"
      },
      transform: {
        cdn: (args) => {
          args.loggingConfig = {
            bucket: logsBucket.bucketRegionalDomainName,
            prefix: "cloudfront/",
            includeCookies: false,
          };
        },
      },
    });

    // 2) Keep your SvelteKit site at `/` (root)
    const site = new sst.aws.SvelteKit("AustinSite", {
      router: { instance: router }, // Mount at root of the same Router
      environment: {
        PUBLIC_STAGE: $app.stage,
        PUBLIC_ROUTER_URL: router.url, // Expose router URL for convenience
      }
    });

    // 3) Do NOT add an explicit /data route.
    // The SvelteKit site is mounted at root on the same Router, so /data is served by the site directly.
    // An explicit route to site.url would forward to the site's CloudFront domain and trigger its 403 guard.

    // 4) External apps - actual deployed URLs with warnings
    const VERCEL_NEXT_ORIGIN =
      process.env.VERCEL_NEXT_ORIGIN ?? "https://austin-site-seven.vercel.app";
    const GCP_TANSTACK_ORIGIN =
      process.env.GCP_TANSTACK_ORIGIN ?? "https://austin-site.netlify.app";

    // Warn when using defaults
    if (!process.env.VERCEL_NEXT_ORIGIN) {
      console.warn("⚠️  Using default VERCEL_NEXT_ORIGIN. Set env var to override.");
    }
    if (!process.env.GCP_TANSTACK_ORIGIN) {
      console.warn("⚠️  Using default GCP_TANSTACK_ORIGIN. Set env var to override.");
    }

    // Path prefixes - SST Router uses startsWith matching, no wildcards needed
    router.route("/vercel/next", VERCEL_NEXT_ORIGIN);
    router.route("/gcp/tanstack", GCP_TANSTACK_ORIGIN);

    // Optional: Add redirects for convenience (removed due to SST bug)
    
    return {
      url: router.url,          // single domain for everything
      sveltekit: site.url,      // SvelteKit origin (also root)
      logsBucket: logsBucket.bucket, // S3 bucket for CloudFront access logs
      variants: {
        vercel_next: VERCEL_NEXT_ORIGIN,
        gcp_tanstack: GCP_TANSTACK_ORIGIN,
      }
    };
  },
});
