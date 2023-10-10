import isHTML from './utils/types/isHTML'
import isElement from './isElement'
import insertBefore from './insertBefore'
import insertHTMLBeforeBegin from './insertHTMLBeforeBegin'

/**
 * 将指定 DOM 节点或者 html 文本解析为 Element 元素，并将结果节点插入 el 元素自身
 * 内部的最前面。
 * ========================================================================
 * @method prepend
 * @param {HTMLElement|String} el
 * @param {HTMLElement} reference
 * @return {boolean}
 */
const prepend = (el, reference) => {
  let $firstChild

  if (!isElement(reference)) {
    return false
  }

  if (isElement(el)) {
    $firstChild = reference.firstChild
    insertBefore(el, $firstChild)
  } else if (isHTML(el)) {
    insertHTMLBeforeBegin(reference, el)
  }
}

export default prepend
