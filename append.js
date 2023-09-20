import isElement from './utils/types/isElement'
import isHTML from './utils/types/isHTML'
import insertAfter from './insertAfter'
import insertHTMLBeforeEnd from './insertHTMLBeforeEnd'

/**
 * 将指定 DOM 节点或者 html 文本解析为 Element 元素，并将结果节点插入 el 元素自身
 * 内部的最后面。
 * ========================================================================
 * @method prepend
 * @param {HTMLElement|String} el
 * @param {HTMLElement} reference
 * @return {boolean}
 */
const append = (el, reference) => {
  if (!isElement(reference)) {
    return false
  }

  if (isElement(el)) {
    insertAfter(el, reference)
  } else if (isHTML(el)) {
    insertHTMLBeforeEnd(reference, el)
  }
}

export default append
