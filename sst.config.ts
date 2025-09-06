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
    // 1) One CloudFront+domain for everything via Router
    // Temporarily disabled custom domain due to conflict
    const router = new sst.aws.Router("Edge", {
      // domain: routerDomainConfig,
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
    const AZURE_NEXT_ORIGIN = 
      process.env.AZURE_NEXT_ORIGIN ?? "https://austin-site-seven.vercel.app";
    const AZURE_REACT_ORIGIN = 
      process.env.AZURE_REACT_ORIGIN ?? "https://gray-pebble-049c9b91e.1.azurestaticapps.net";
    const GCP_TANSTACK_ORIGIN = 
      process.env.GCP_TANSTACK_ORIGIN ?? "https://austin-site.netlify.app";
    
    // Warn when using defaults
    if (!process.env.AZURE_NEXT_ORIGIN) {
      console.warn("⚠️  Using default AZURE_NEXT_ORIGIN. Set env var to override.");
    }
    if (!process.env.AZURE_REACT_ORIGIN) {
      console.warn("⚠️  Using default AZURE_REACT_ORIGIN. Set env var to override.");
    }
    if (!process.env.GCP_TANSTACK_ORIGIN) {
      console.warn("⚠️  Using default GCP_TANSTACK_ORIGIN. Set env var to override.");
    }

    // Path prefixes - SST Router uses startsWith matching, no wildcards needed
    router.route("/azure/next", AZURE_NEXT_ORIGIN);
    // React (Azure SWA): rewrite the prefixed path to root since SWA serves from root
    router.route("/azure/react/assets", AZURE_REACT_ORIGIN, {
      rewrite: { regex: "^/azure/react/assets/(.*)$", to: "/assets/$1" }
    });
    router.route("/azure/react", AZURE_REACT_ORIGIN, {
      rewrite: { regex: "^/azure/react/(.*)$", to: "/$1" }
    });
    router.route("/gcp/tanstack", GCP_TANSTACK_ORIGIN);

    // Optional: Add redirects for convenience (removed due to SST bug)
    
    return {
      url: router.url,          // single domain for everything
      sveltekit: site.url,      // SvelteKit origin (also root)
      variants: {
        azure_next: AZURE_NEXT_ORIGIN,
        azure_react: AZURE_REACT_ORIGIN,
        gcp_tanstack: GCP_TANSTACK_ORIGIN,
      }
    };
  },
});
