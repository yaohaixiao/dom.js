import isHTML from './utils/types/isHTML'
import isDOM from './isDOM'
import isElement from './isElement'
import text from './text'
import insertBefore from './insertBefore'
import insertHTMLBeforeBegin from './insertHTMLBeforeBegin'
import isString from './utils/types/isString'

/**
 * 将指定 DOM 节点或者 html 文本解析为 Element 元素，并将结果节点插入 el 元素自身
 * 内部的最前面。
 * ========================================================================
 * @method prepend
 * @param {HTMLElement|String} el
 * @param {HTMLElement} reference
 * @return {Element|Text|null}
 */
const prepend = (el, reference) => {
  if (!isElement(reference) || (!isHTML(el) && !isString(el) && !isDOM(el))) {
    return null
  }

  if (isDOM(el)) {
    return insertBefore(el, reference)
  }
  if (isHTML(el)) {
    return insertHTMLBeforeBegin(reference, el)
  } else {
    return insertBefore(text(el), reference)
  }
}

export default prepend
