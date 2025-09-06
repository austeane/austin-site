// app.config.ts
import { defineConfig } from "@tanstack/start/config";
import { TanStackRouterVite } from "@tanstack/router-plugin/vite";
var app_config_default = defineConfig({
  server: {
    preset: "netlify"
  },
  vite: {
    base: "/gcp/tanstack/",
    plugins: () => [
      TanStackRouterVite({
        routesDirectory: "./src/routes",
        generatedRouteTree: "./src/routeTree.gen.ts"
      })
    ]
  }
});
export {
  app_config_default as default
};
