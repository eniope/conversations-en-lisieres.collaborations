import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"
import Logo from "./Logo"


const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title

  // 🔑 Chemin correct vers la racine du site (GitHub Pages friendly)
  const baseDir = pathToRoot(fileData.slug!)

  return (
<h2 class={classNames(displayClass, "page-title")}>
  <a href={baseDir} class="page-title-link"> 
    {/* <img class="Logo" 
    src={`${baseDir === "." ? "./" : baseDir}static/Logo.png`} 
    alt={title} 
    />  */}
    <Logo />
    </a> 
</h2>
  )
}

PageTitle.css = `
.page-title {
  margin: 0;
  text-align: center;
}

.page-title-link {
  display: inline-block;
}

.Logo {
  max-width: 100%;
  height: auto;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
