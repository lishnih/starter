// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  app: {
    head: {
//       link: [
//         { rel: "stylesheet", href: "base.css" },
//       ],
//       script: [{ src: "https://yastatic.net/s3/passport-sdk/autofill/v1/sdk-suggest-with-polyfills-latest.js" }],
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/content",
    "@nuxt/icon",
    "@nuxthq/studio",
    "@nuxtjs/color-mode",
    "@nuxtjs/seo",
    "@nuxt/scripts",
    "@nuxt/image",
    "@nuxt/fonts",
  ],

  colorMode: {
    classSuffix: "",
  },

  // https://content.nuxt.com/
  content: {
    documentDriven: {
      injectPage: false,
    },
    highlight: false,
  },

  ogImage: {
    defaults: {
      component: "OgImage",
    },
  },

  runtimeConfig: {
    public: {
      yandexClientID: process.env.YANDEX_CLIENT_ID,
      yandexClientSecret: process.env.YANDEX_CLIENT_SECRET,
      url: "http://localhost:3000/",
      mdc: {
        useNuxtImage: true,
      },
    },
  },

  nitro: {
    prerender: {
      failOnError: false,
      crawlLinks: true,
      routes: ["/", "/sitemap.xml"],
    },
  },

  site: {
    url: "http://localhost:3000/",
  },

  compatibilityDate: "2024-11-10",
});
