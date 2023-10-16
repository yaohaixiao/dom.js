import isElement from './isElement'
import getStyle from './getStyle'
import show from './show'
import hide from './hide'

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
    hide(el)
  } else {
    show(el)
  }
}

export default toggle
