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
    const site = new sst.aws.SvelteKit("AustinSite", {
      environment: {
        PUBLIC_STAGE: $app.stage,
      }
    });
    
    return {
      url: site.url,
    };
  },
});
