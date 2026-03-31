import { QuartzComponent, QuartzComponentProps } from "./types"

/**
 * LinksHeader — cooplab.org (hub)
 * Navigation vers les deux espaces + à propos
 */
const LinksHeader: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <nav class="links-header">
      <a class="links-header-item" href="https://utopia.cooplab.org">Utopia</a>
      <a class="links-header-item" href="https://conversations.cooplab.org">Conversations en lisières</a>
      <a class="links-header-item" href="/a-propos">À propos</a>
    </nav>
  )
}

export default (() => LinksHeader)
