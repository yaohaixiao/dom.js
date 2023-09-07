import toCamel from './utils/string/toCamel'
import isElement from './utils/types/isElement'

const setStyle = (el, attr, val) => {
  let prop

  if (!isElement(el)) {
    return false
  }

  prop = toCamel(attr)

  if (prop === 'float') {
    prop = 'cssFloat'
  }

  el.style[prop] = val
}

export default setStyle
