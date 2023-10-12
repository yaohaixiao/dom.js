import isElement from './isElement'
import getStyle from './getStyle'
import setStyle from './setStyle'

/**
 * 隐藏或者显示指定 DOM 元素
 * ========================================================================
 * @method toggle
 * @param {HTMLElement} el
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
