import isElement from './isElement'
import getStyle from './getStyle'
import setStyle from './setStyle'

/**
 * ========================================================================
 * @method
 * @param el
 * @return {boolean}
 */
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
