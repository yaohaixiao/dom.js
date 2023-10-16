import isElement from './isElement'
import getStyle from './getStyle'
import setStyle from './setStyle'

/**
 * 隐藏指定 DOM 元素
 * ========================================================================
 * @method toggle
 * @param {HTMLElement} el
 */
const hide = (el) => {
  if (!isElement(el) || getStyle(el, 'display') === 'none') {
    return false
  }

  setStyle(el, 'display', 'none')
}

export default hide
