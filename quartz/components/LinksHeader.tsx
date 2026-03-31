import { QuartzComponent, QuartzComponentProps } from "./types"

/**
 * LinksHeader — conversations.cooplab.org
 * Navigation locale uniquement — les inter-quartz sont dans le footer
 */
const LinksHeader: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <nav class="links-header">
      <a class="links-header-item" href="/billets">Billets</a>
      <a class="links-header-item" href="/dossiers">Dossiers</a>
      <a class="links-header-item" href="/fiches">Fiches</a>
    </nav>
  )
}

export default (() => LinksHeader)
