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
    // Domain only for production - other stages use CloudFront default domain
    const isProduction = $app.stage === "production";
    const router = new sst.aws.Router("Edge", {
      domain: isProduction ? {
        name: "www.austinwallace.ca",
        // redirects: ["austinwallace.ca"], // Another CloudFront has this, handle separately
        dns: false, // We'll manage DNS in GoDaddy
        cert: "arn:aws:acm:us-east-1:737679990662:certificate/061f07dc-2e1e-4751-bfee-e7e26c8b7c80"
      } : undefined,
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

    // VLIW CPU Optimization Visualization - deployed as StaticSite at /kernel
    const kernelViz = new sst.aws.StaticSite("KernelViz", {
      path: "apps/kernel",
      build: {
        command: "npm install && npm run build",
        output: "dist",
      },
    });
    router.route("/kernel", kernelViz.url);

    // ===== Trading Card App =====
    // Hybrid deployment: Frontend from austin-site, backend from trading-card-app repo
    // Backend (Lambda, DynamoDB, S3) stays deployed from ~/dev/trading-card-app
    const TRADING_CARDS_ROUTER = process.env.TRADING_CARDS_ROUTER ?? "https://dx56a7tfy0a7x.cloudfront.net";

    if (!process.env.TRADING_CARDS_ROUTER) {
      console.warn("⚠️  Using default TRADING_CARDS_ROUTER. Set env var to override.");
    }

    // Frontend only - build with /trading-cards base path
    const tradingCardsSite = new sst.aws.StaticSite("TradingCardsSite", {
      path: "apps/trading-cards",
      build: {
        command: "pnpm install && pnpm build",
        output: "client/dist",
      },
      environment: {
        VITE_BASE_PATH: "/trading-cards",
      },
    });

    // Trading Cards Routes - proxy API and media to existing trading-card-app deployment
    router.route("/trading-cards/api", TRADING_CARDS_ROUTER, {
      rewrite: { regex: "^/trading-cards/api/(.*)$", to: "/api/$1" },
    });
    router.route("/trading-cards/r", TRADING_CARDS_ROUTER, {
      rewrite: { regex: "^/trading-cards/r/(.*)$", to: "/r/$1" },
    });
    router.route("/trading-cards/c", TRADING_CARDS_ROUTER, {
      rewrite: { regex: "^/trading-cards/c/(.*)$", to: "/c/$1" },
    });
    router.route("/trading-cards", tradingCardsSite.url, {
      rewrite: { regex: "^/trading-cards(?:/(.*))?$", to: "/$1" },
    });

    return {
      url: router.url,          // single domain for everything
      sveltekit: site.url,      // SvelteKit origin (also root)
      logsBucket: logsBucket.bucket, // S3 bucket for CloudFront access logs
      variants: {
        vercel_next: VERCEL_NEXT_ORIGIN,
        gcp_tanstack: GCP_TANSTACK_ORIGIN,
      },
      tradingCards: {
        site: tradingCardsSite.url,
        backend: TRADING_CARDS_ROUTER,
      },
    };
  },
});
