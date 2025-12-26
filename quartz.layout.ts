import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

// MMW: hiding notes from graph via tags
const tagsToRemove = ["graph-exclude"]
const graphConfig = {
  localGraph: {
    removeTags: tagsToRemove,
    excludeTags: ["graph-exclude"],
  },
  globalGraph: {
    removeTags: tagsToRemove,
    excludeTags: ["graph-exclude"],
  },
}

// =================================================
// COMPONENTS SHARED ACROSS ALL PAGES
// =================================================

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),

  // ⛔️ IMPORTANT
  // Le menu horizontal n’est PLUS dans le header global
  // pour éviter tout centrage structurel Quartz
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
// PAGES: SINGLE CONTENT PAGE
// =================================================

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    // ✅ Menu horizontal dans le flux,
    // aligné exactement comme le breadcrumb
    Component.LinksHeader(),

    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
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

// =================================================
// PAGES: LIST PAGES (TAGS, FOLDERS, ETC.)
// =================================================

export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    // ✅ Même positionnement que pour les pages de contenu
    Component.LinksHeader(),

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
