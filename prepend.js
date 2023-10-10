import isHTML from './utils/types/isHTML'
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
  let $firstChild

  if (
    !isElement(reference) ||
    (!isHTML(el) && !isString(el) && !isElement(el))
  ) {
    return null
  }

  if (isElement(el)) {
    $firstChild = reference.firstChild
    return insertBefore(el, $firstChild)
  }
  if (isString(el)) {
    return insertBefore(text(el), reference)
  } else {
    return insertHTMLBeforeBegin(reference, el)
  }
}

export default prepend
