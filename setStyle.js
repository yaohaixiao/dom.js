import toCamel from './utils/toCamel'
import isElement from './utils/isElement'

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
