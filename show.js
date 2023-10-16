import isElement from './isElement'
import getStyle from './getStyle'
import setStyle from './setStyle'

/**
 * 隐藏指定 DOM 元素
 * ========================================================================
 * @method toggle
 * @param {HTMLElement} el
 */
const show = (el) => {
  if (!isElement(el) || getStyle(el, 'display') === 'block') {
    return false
  }

  setStyle(el, 'display', 'block')
}

export default show
