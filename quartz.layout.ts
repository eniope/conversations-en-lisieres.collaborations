import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// =================================================
// GRAPH CONFIG (MMW)
// =================================================

const tagsToRemove = ["graph-exclude"]

const graphConfig = {
  localGraph: {
    removeTags: tagsToRemove,
    excludeTags: tagsToRemove,
  },
  globalGraph: {
    removeTags: tagsToRemove,
    excludeTags: tagsToRemove,
  },
}

// =================================================
// SHARED COMPONENTS (GLOBAL)
// =================================================

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),

  // ⛔️ IMPORTANT
  // Le menu horizontal N’EST PLUS dans le header global
  // pour éviter tout centrage structurel Quartz / Morrowind
  header: [],

  afterBody: [],

  footer: Component.Footer({
    links: {
      GitHub: "https://github.com/morrowind-modding/wiki",
      "Discord Community": "https://discord.gg/UdM3VrmJsc",
    },
  }),
}

// =================================================
// PAGE LAYOUT — SINGLE CONTENT PAGE
// =================================================

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    // ✅ MENU HORIZONTAL
    // Déclaré explicitement pour DESKTOP et MOBILE
    Component.DesktopOnly(Component.LinksHeader()),
    Component.MobileOnly(Component.LinksHeader()),

    // Flux de lecture
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
    Component.MobileOnly(Component.TableOfContents2()),
  ],

  left: [
    // Logo + navigation latérale
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.Explorer({
        folderClickBehavior: "link",
        filterFn: (node) => node.name !== "templates",
      })
    ),
  ],

  right: [
    Component.MobileOnly(
      Component.Explorer({
        folderClickBehavior: "link",
        filterFn: (node) => node.name !== "templates",
      })
    ),
    Component.DesktopOnly(Component.Graph(graphConfig)),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

// =================================================
// PAGE LAYOUT — LIST PAGES (TAGS, FOLDERS…)
// =================================================

export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    // ✅ MENU HORIZONTAL
    Component.DesktopOnly(Component.LinksHeader()),
    Component.MobileOnly(Component.LinksHeader()),

    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.MobileOnly(Component.TableOfContents2()),
  ],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(
      Component.Explorer({
        folderClickBehavior: "link",
        filterFn: (node) => node.name !== "templates",
      })
    ),
  ],

  right: [
    Component.MobileOnly(
      Component.Explorer({
        folderClickBehavior: "link",
        filterFn: (node) => node.name !== "templates",
      })
    ),
    Component.DesktopOnly(Component.Graph(graphConfig)),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}
