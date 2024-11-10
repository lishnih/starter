export default defineAppConfig({
  general: {
    title: "title",
    logo: "logo.png",
  },
  site: {
    name: "name",
    description: "description",
    favicon: {
      image: "/favicon.ico"
    },
  },
  header: {
    banner: {
      show: false,
    },
    navbar: {
      colorModeSelector: true,
      links: [
      ],
    },
  },
  ui: {
    icons: {
      dark: "tabler:moon",
      light: "tabler:sun",
    },
  },
});
