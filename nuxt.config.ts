// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  $production: {
    routeRules: {
      "/**": { isr: true },
    },
  },
  $development: {},
  $env: {
    staging: {},
  },
  devServer: {
    port: 42069,
  },
  runtimeConfig: {
    apiSecret: "secret",
    public: {
      apiBase: "/api",
    },
  },
  vite: {
    vue: {
      customElement: true,
    },
    vueJsx: {
      mergeProps: true,
    },
  },
  webpack: {
    loaders: {
      vue: {
        hotReload: true,
      },
    },
  },
  app: {
    head: {
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      link: [
        // { rel: "stylesheet", href: "https://unpkg.com/@sakun/system.css" },
      ],
    },
  },
  css: ["~/assets/css/main.css"],
  typescript: {
    includeWorkspace: true,
  },
});
