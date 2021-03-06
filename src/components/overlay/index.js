import { pick } from '../../utils'
import Overlay from './overlay.vue'

function plugin (Vue, options = {}) {
  if (plugin.installed) {
    return
  }
  plugin.installed = true

  options = pick(options, 'dataProjection')
  Object.assign(Overlay, options)

  Vue.component(Overlay.name, Overlay)
}

export default plugin

export {
  plugin as install,
  Overlay,
}
