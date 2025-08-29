/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "austin-site",
      removal: input?.stage === "production" ? "retain" : "remove",
      protect: ["production"].includes(input?.stage),
      home: "aws",
    };
  },
  async run() {
    // Only add custom domain if in production
    const domainConfig = $app.stage === "production" 
      ? {
          domain: {
            name: "www.austinwallace.ca",
            redirects: ["austinwallace.ca"],
            dns: false // We'll manage DNS in GoDaddy
          }
        }
      : {};
    
    const site = new sst.aws.SvelteKit("AustinSite", {
      ...domainConfig,
      environment: {
        PUBLIC_STAGE: $app.stage,
      }
    });
    
    return {
      url: site.url,
      customDomain: site.domain,
    };
  },
});
