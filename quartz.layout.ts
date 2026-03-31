import { PageLayout, SharedLayout } from "./quartz/cfg"
import * as Component from "./quartz/components"

/**
 * Layout — cooplab.org (hub)
 *
 * Différences vs conversations :
 * - Pas d'Explorer (site de quelques pages, pas un wiki)
 * - Pas de Graph
 * - Pas de Backlinks
 * - Pas de TableOfContents (pages courtes)
 * - LinksHeader simplifié (3 destinations)
 * - Search conservé
 */

export const sharedPageComponents: SharedLayout = {
  head: Component.Head(),

  header: [
    Component.LinksHeader(),   // → LinksHeader.tsx spécifique hub
  ],

  afterBody: [],

  footer: Component.Footer({
    links: {
      "utopia.cooplab.org": "https://utopia.cooplab.org",
      "conversations.cooplab.org": "https://conversations.cooplab.org",
      "CC BY-SA": "https://creativecommons.org/licenses/by-sa/4.0/",
    },
  }),
}

export const defaultContentPageLayout: PageLayout = {
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
    // Pas d'Explorer — le hub n'est pas un wiki
  ],

  right: [
    // Colonne droite quasi vide — le contenu respire
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
  ],

  right: [],
}
