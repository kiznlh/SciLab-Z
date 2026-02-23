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
    port: 6969,
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
    },
  },
  css: ["~/assets/css/main.css"],
});
