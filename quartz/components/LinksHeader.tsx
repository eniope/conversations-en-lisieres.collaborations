import { QuartzComponent, QuartzComponentProps } from "./types"

const LinksHeader: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <nav class="links-header">
      <a class="links-header-item" href="/conversations-en-lisieres/billets/">Billets</a>
      <a class="links-header-item" href="/conversations-en-lisieres/dossiers/">Dossiers</a>
      <a class="links-header-item" href="/mmw-content/a-propos/">À propos</a>
      <a class="links-header-item" href="/mmw-content/abonnement/">Abonnement</a>
    </nav>
  )
}

export default (() => LinksHeader)
