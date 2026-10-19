import {
  defineConfig,
  envField,
  fontProviders,
  svgoOptimizer,
} from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import { unified } from "@astrojs/markdown-remark";
import remarkToc from "remark-toc";
import remarkCollapse from "remark-collapse";
import rehypeCallouts from "rehype-callouts";
import {
  transformerNotationDiff,
  transformerNotationHighlight,
  transformerNotationWordHighlight,
} from "@shikijs/transformers";
import { transformerFileName } from "./src/utils/transformers/fileName";
import config from "./astro-paper.config";

export default defineConfig({
  site: config.site.url,
  integrations: [
    mdx(),
    sitemap({
      filter: page =>
        config.features?.showArchives !== false || !page.endsWith("/archives/"),
    }),
  ],
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    processor: unified({
      remarkPlugins: [
        remarkToc,
        [remarkCollapse, { test: "Table of contents" }],
      ],
      rehypePlugins: [rehypeCallouts],
    }),
    shikiConfig: {
      themes: { light: "min-light", dark: "night-owl" },
      defaultColor: false,
      wrap: false,
      transformers: [
        transformerFileName({ style: "v2", hideDot: false }),
        transformerNotationHighlight(),
        transformerNotationWordHighlight(),
        transformerNotationDiff({ matchAlgorithm: "v3" }),
      ],
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      // Bundled from npm so builds don't depend on fetching Google Fonts.
      // .woff is listed first because Satori (OG images) can't read .woff2.
      name: "IBM Plex Mono",
      cssVariable: "--font-ibm-plex-mono",
      provider: fontProviders.local(),
      fallbacks: ["monospace"],
      options: {
        variants: [
          {
            weight: 400,
            style: "normal",
            src: [
              "./node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff",
              "./node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-normal.woff2",
            ],
          },
          {
            weight: 400,
            style: "italic",
            src: [
              "./node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-italic.woff",
              "./node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-400-italic.woff2",
            ],
          },
          {
            weight: 500,
            style: "normal",
            src: [
              "./node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff",
              "./node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-500-normal.woff2",
            ],
          },
          {
            weight: 600,
            style: "normal",
            src: [
              "./node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-600-normal.woff",
              "./node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-600-normal.woff2",
            ],
          },
          {
            weight: 600,
            style: "italic",
            src: [
              "./node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-600-italic.woff",
              "./node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-600-italic.woff2",
            ],
          },
          {
            weight: 700,
            style: "normal",
            src: [
              "./node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-700-normal.woff",
              "./node_modules/@fontsource/ibm-plex-mono/files/ibm-plex-mono-latin-700-normal.woff2",
            ],
          },
        ],
      },
    },
  ],
  env: {
    schema: {
      PUBLIC_GOOGLE_SITE_VERIFICATION: envField.string({
        access: "public",
        context: "client",
        optional: true,
      }),
    },
  },
  experimental: {
    svgOptimizer: svgoOptimizer(),
  },
});
