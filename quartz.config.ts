import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz — these.cooplab.org
 * Thèse : l'évaluation comme conduite du collectif pensant.
 * Fork de conversations-en-lisieres.collaborations
 */
const config: QuartzConfig = {
  contentDir: "mmw-content",

  configuration: {
    pageTitle: "thèse",
    pageTitleSuffix: " · cooplab.org",

    enableSPA: true,
    enablePopovers: true,

    baseUrl: "these.cooplab.org",

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
          light: "#faf8f8",       // fond neutre (blanc cassé)
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#3A7CB8",   // bleu acier — couleur signature conversations
          tertiary: "#d4896a",
          highlight: "rgba(58, 124, 184, 0.08)",
          textHighlight: "#b8d4f088",
        },
        darkMode: {
          light: "#1a1210",
          lightgray: "#3a2820",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#6a9fcb",
          tertiary: "#C1623F",
          highlight: "rgba(58, 124, 184, 0.12)",
          textHighlight: "#3a5a8888",
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
