import isElement from './utils/types/isElement'
import isHTML from './utils/types/isHTML'
import insertAfter from './insertAfter'
import insertHTMLAfterEnd from './insertHTMLAfterEnd'

/**
 * 在指定 DOM 节点后添加子节点或者将 HTML 字符转化成节点添加到后面
 * ========================================================================
 * @method after
 * @param {HTMLElement|String} el
 * @param {HTMLElement} reference
 * @return {boolean}
 */
const after = (el, reference) => {
  if (!isElement(reference)) {
    return false
  }

  if (isElement(el)) {
    insertAfter(el, reference)
  } else if (isHTML(el)) {
    insertHTMLAfterEnd(reference, el)
  }
}

export default after
