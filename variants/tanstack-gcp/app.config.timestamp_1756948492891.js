// app.config.ts
import { defineConfig } from "@tanstack/start/config";
var app_config_default = defineConfig({
  server: {
    preset: "netlify"
  },
  vite: {
    base: "/gcp/tanstack/"
  },
  routers: {
    client: {
      basename: "/gcp/tanstack"
    },
    ssr: {
      basename: "/gcp/tanstack"
    }
  }
});
export {
  app_config_default as default
};
