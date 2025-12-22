import { QuartzConfig } from "./quartz/cfg"
import * as Plugin from "./quartz/plugins"

/**
 * Quartz 4.0 Configuration
 * 
 * Configuration située pour le site :
 * "Conversations en lisière"
 * 
 * Espace de publication progressive,
 * dédié au partage de fragments documentés
 * d’un travail d’enquête, d’écriture et de réflexion en situation.
 */
const config: QuartzConfig = {
  configuration: {
    // --- Identité du site ---
    pageTitle: "Conversations en lisière",
    pageTitleSuffix: "",
    
    // --- Expérience de navigation ---
    enableSPA: true,
    enablePopovers: true,

    // --- Langue et contexte ---
    locale: "fr-FR",

    // --- Déploiement GitHub Pages ---
    baseUrl: "/conversations-en-lisieres/",

    // --- Contenu ignoré ---
    ignorePatterns: ["private", "**/templates/", ".obsidian"],

    // --- Métadonnées temporelles ---
    defaultDateType: "modified",

    // --- Partage & réseaux ---
    generateSocialImages: false,

    // --- Thème & lisibilité ---
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
          light: "#faf8f8",
          lightgray: "#e5e5e5",
          gray: "#b8b8b8",
          darkgray: "#4e4e4e",
          dark: "#2b2b2b",
          secondary: "#284b63",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#fff23688",
        },
        darkMode: {
          light: "#161618",
          lightgray: "#393639",
          gray: "#646464",
          darkgray: "#d4d4d4",
          dark: "#ebebec",
          secondary: "#7b97aa",
          tertiary: "#84a59d",
          highlight: "rgba(143, 159, 169, 0.15)",
          textHighlight: "#b3aa0288",
        },
      },
    },
  },

  // --- Plugins Quartz ---
  plugins: {
    transformers: [
      Plugin.FrontMatter(),

      Plugin.CreatedModifiedDate({
        priority: ["git", "frontmatter", "filesystem"],
      }),

      Plugin.SyntaxHighlighting({
        theme: {
          light: "github-light",
          dark: "github-dark",
        },
        keepBackground: false,
      }),

      Plugin.ObsidianFlavoredMarkdown({
        enableInHtmlEmbed: false,
      }),

      Plugin.GitHubFlavoredMarkdown(),

      Plugin.TableOfContents(),

      Plugin.CrawlLinks({
        markdownLinkResolution: "shortest",
      }),

      // Exploite les descriptions (frontmatter ou extrait)
      Plugin.Description(),

      Plugin.Latex({
        renderEngine: "katex",
      }),

      Plugin.HardLineBreaks(),
    ],

    // --- Filtres ---
    filters: [
      Plugin.RemoveDrafts(),
    ],

    // --- Émetteurs ---
    emitters: [
      Plugin.AliasRedirects(),
      Plugin.ComponentResources(),
      Plugin.ContentPage(),
      Plugin.FolderPage(),
      Plugin.TagPage(),
      Plugin.ContentIndex({
        enableSiteMap: true,
        enableRSS: true,
      }),
      Plugin.Assets(),
      Plugin.Static(),
      Plugin.NotFoundPage(),
    ],
  },
}

export default config
