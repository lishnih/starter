// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

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
      url: process.env.NUXT_PUBLIC_SITE_URL,
      yandexClientID: process.env.YANDEX_CLIENT_ID,
      yandexClientRedirect: process.env.YANDEX_CLIENT_REDIRECT,
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

//site: {
//  url: "http://localhost:3000/",
//},

  compatibilityDate: "2024-11-10",
});
