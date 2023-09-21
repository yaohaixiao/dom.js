import getStyle from './getStyle'
import inDocument from './inDocument'

/**
 * 判断 DOM 元素是否可以定位（可见且在当前当前文档中）。
 * ========================================================================
 * @method canPosition
 * @param {HTMLElement} el
 * @return {Boolean}
 * @private
 */
const canPosition = (el) => {
  return getStyle(el, 'display') !== 'none' && inDocument(el)
}

export default canPosition
