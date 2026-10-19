import { defineAstroPaperConfig } from "./src/types/config";

export default defineAstroPaperConfig({
  site: {
    url: "https://yamen.dev/",
    title: "yamen.dev",
    description: "A blog by Yamen Sharaf.",
    author: "Yamen Sharaf",
    profile: "https://yamen.dev/",
    ogImage: "default-og.jpg",
    lang: "en",
    timezone: "Europe/Berlin",
    dir: "ltr",
  },
  posts: {
    perPage: 4,
    perIndex: 4,
    scheduledPostMargin: 15 * 60 * 1000,
  },
  features: {
    lightAndDarkMode: true,
    dynamicOgImage: true,
    showArchives: false,
    showBackButton: true,
    editPost: {
      enabled: true,
      url: "https://github.com/YamenSharaf/yamen.dev/edit/main/",
    },
    search: "pagefind",
  },
  socials: [
    { name: "github",   url: "https://github.com/YamenSharaf" },
    { name: "linkedin", url: "https://www.linkedin.com/in/yamensharaf" },
    { name: "mail",     url: "mailto:hi@yamen.dev" },
  ],
});
