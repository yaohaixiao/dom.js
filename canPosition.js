import isElement from './isElement'
import getStyle from './getStyle'
import inDocument from './inDocument'

/**
 * 判断 DOM 元素是否可以定位（可见且在当前当前文档中）。
 * ========================================================================
 * @method canPosition
 * @param {HTMLElement} el
 * @return {Boolean}
 */
const canPosition = (el) => {
  if (!isElement(el)) {
    return false
  }

  return getStyle(el, 'display') !== 'none' && inDocument(el)
}

export default canPosition
