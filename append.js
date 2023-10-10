import isString from './utils/types/isString'
import isHTML from './utils/types/isHTML'
import isElement from './isElement'
import text from './text'
import insertAfter from './insertAfter'
import insertHTMLBeforeEnd from './insertHTMLBeforeEnd'

/**
 * 将指定 DOM 节点或者 html 文本解析为 Element 元素，并将结果节点插入 el 元素自身
 * 内部的最后面。
 * ========================================================================
 * @method prepend
 * @param {HTMLElement|String} el
 * @param {HTMLElement} reference
 * @return {Element|Text|null}
 */
const append = (el, reference) => {
  if (
    !isElement(reference) ||
    (!isHTML(el) && !isString(el) && !isElement(el))
  ) {
    return null
  }

  if (isElement(el)) {
    return insertAfter(el, reference)
  } else if (isString(el)) {
    return insertAfter(text(el), reference)
  } else {
    return insertHTMLBeforeEnd(reference, el)
  }
}

export default append
