import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

/**
 * Layout — conversations.cooplab.org
 *
 * Espace : billets, dossiers, fiches — wiki de lisières
 * Couleur signature : bleu acier #3A7CB8
 * Inter-quartz : footer uniquement (cooplab.org + utopia.cooplab.org)
 */

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),

  header: [
    Component.LinksHeader(),   // navigation locale (billets, dossiers, fiches...)
  ],

  afterBody: [],

  footer: Component.Footer({
    links: {
      "cooplab.org": "https://cooplab.org",
      "utopia.cooplab.org": "https://utopia.cooplab.org",
      "CC BY-SA": "https://creativecommons.org/licenses/by-sa/4.0/",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
    Component.TagList(),
  ],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      filterFn: (node) => {
        const excluded = ["templates", "_static", "medias", "ressources"]
        return !excluded.includes(node.name)
      },
    })),
  ],

  right: [
    Component.Graph(),
    Component.DesktopOnly(Component.TableOfContents()),
    Component.Backlinks(),
  ],
}

export const defaultListPageLayout: PageLayout = {
  beforeBody: [
    Component.Breadcrumbs(),
    Component.ArticleTitle(),
    Component.ContentMeta(),
  ],

  left: [
    Component.PageTitle(),
    Component.MobileOnly(Component.Spacer()),
    Component.Search(),
    Component.Darkmode(),
    Component.DesktopOnly(Component.Explorer({
      filterFn: (node) => {
        const excluded = ["templates", "_static", "medias", "ressources"]
        return !excluded.includes(node.name)
      },
    })),
  ],

  right: [],
}
