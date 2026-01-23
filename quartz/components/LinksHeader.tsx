import { QuartzComponent, QuartzComponentProps } from "./types"

const LinksHeader: QuartzComponent = (_props: QuartzComponentProps) => {
  return (
    <nav class="links-header">
      <a class="links-header-item" href="/conversations-en-lisieres.collaborations/billets/">Billets</a>
      <a class="links-header-item" href="/conversations-en-lisieres.collaborations/dossiers/">Dossiers</a>
      <a class="links-header-item" href="/conversations-en-lisieres.collaborations/pages-/a-propos">À propos</a>
      <a class="links-header-item" href="/conversations-en-lisieres.collaborations/pages-/abonnement">Abonnement</a>
    </nav>
  )
}

export default (() => LinksHeader)
