import isElement from './utils/types/isElement'
import getStyle from './getStyle'
import setStyle from './setStyle'

const toggle = (el) => {
  if (!isElement(el)) {
    return false
  }

  if (getStyle(el, 'display') !== 'none') {
    setStyle(el, 'display', 'none')
  } else {
    setStyle(el, 'display', 'block')
  }
}

export default toggle
