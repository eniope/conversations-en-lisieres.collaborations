import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { joinSegments } from "../util/path"

const LinksHeader: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  const baseUrl = cfg.baseUrl ?? "/"

  const links = [
    { label: "Billets", href: joinSegments(baseUrl, "billets/") },
    { label: "Dossiers", href: joinSegments(baseUrl, "dossiers/") },
    { label: "À propos", href: joinSegments(baseUrl, "a-propos/") },
    { label: "Abonnement", href: joinSegments(baseUrl, "abonnement/") },
  ]

  return (
    <nav class="links-header">
      {links.map((link) => (
        <a class="links-header-item" href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  )
}

export default (() => LinksHeader) satisfies QuartzComponentConstructor
