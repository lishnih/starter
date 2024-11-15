export default defineAppConfig({
  general: {
    title: "Page title",
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
      dark: "material-symbols:dark-mode",
      light: "material-symbols:light-mode",
    },
  },
});
