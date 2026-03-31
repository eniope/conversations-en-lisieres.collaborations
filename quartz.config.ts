import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz — cooplab.org (hub)
 * Point d'entrée de l'écosystème cooplab.
 * Fork de conversations-en-lisieres.collaborations
 */
const config: QuartzConfig = {
  contentDir: "content",

  configuration: {
    pageTitle: "cooplab.org",
    pageTitleSuffix: "",

    enableSPA: true,
    enablePopovers: false,   // hub = navigation simple, pas de popover

    baseUrl: "cooplab.org",

    ignorePatterns: ["private", "**/templates/", ".obsidian"],

    defaultDateType: "published",
    generateSocialImages: false,

    theme: {
      fontOrigin: "googleFonts",
      cdnCaching: true,
      typography: {
        header: "Schibsted Grotesk",
        body: "Source Sans Pro",
        code: "IBM Plex Mono",
      },
      colors: {
        lightMode: {
          light: "#fdf8f6",       // fond légèrement terracotta-blanc
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#C1623F",   // terracotta — couleur signature hub
          tertiary: "#d4896a",
          highlight: "rgba(193, 98, 63, 0.08)",
          textHighlight: "#f5d5c888",
        },
        darkMode: {
          light: "#1a1210",
          lightgray: "#3a2820",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#d4896a",
          tertiary: "#C1623F",
          highlight: "rgba(193, 98, 63, 0.12)",
          textHighlight: "#5a2a1a88",
        },
      },
    },
  },

  plugins: {
    transformers: [
      Plugin.FrontMatter(),
      Plugin.CreatedModifiedDate({
        priority: ["frontmatter", "git", "filesystem"],
      }),
      Plugin.SyntaxHighlighting({
        theme: { light: "github-light", dark: "github-dark" },
        keepBackground: false,
      }),
      Plugin.ObsidianFlavoredMarkdown({ enableInHtmlEmbed: false }),
      Plugin.GitHubFlavoredMarkdown(),
      Plugin.CrawlLinks({ markdownLinkResolution: "relative" }),
      Plugin.Description(),
      Plugin.HardLineBreaks(),
    ],

    filters: [
      Plugin.RemoveDrafts(),
    ],

    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: false,    // hub = pas de flux RSS propre
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
