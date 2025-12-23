import { pathToRoot } from "../util/path"
import { QuartzComponent, QuartzComponentConstructor, QuartzComponentProps } from "./types"
import { classNames } from "../util/lang"
import { i18n } from "../i18n"

const PageTitle: QuartzComponent = ({ fileData, cfg, displayClass }: QuartzComponentProps) => {
  const title = cfg?.pageTitle ?? i18n(cfg.locale).propertyDefaults.title
  const baseDir = pathToRoot(fileData.slug!)

  return (
   <h2 class={classNames(displayClass, "page-title")}>
      <span class="title-main">Conversations</span>
      <span class="title-main">en</span>
      <span class="title-main">lisières</span>
    </h2>
  )
}

PageTitle.css = `
.page-title {
  font-size: 1.75rem;
  margin: 0;
  text-align: center;
}

.page-title-link {
  text-decoration: none;
  color: inherit;
}

.page-title-text {
  display: inline-block;
  line-height: 1.2;
}
`

export default (() => PageTitle) satisfies QuartzComponentConstructor
