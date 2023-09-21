import isElement from './utils/types/isElement'
import _isAncestor from './_isAncestor'

/**
 * 判断 DOM 元素是否在当前文档中。
 * ========================================================================
 * @method inDocument
 * @param {String | HTMLElement} el
 * @param {Object} [doc]
 * @return {Boolean}
 */
const inDocument = (el, doc) => {
  if (!isElement(el)) {
    return false
  }

  doc = doc || el.ownerDocument

  return _isAncestor(doc.documentElement, el)
}

export default inDocument
