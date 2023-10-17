import isHTML from './utils/types/isHTML'
import isFunction from './utils/types/isFunction'
import isDOM from './isDOM'
import isElement from './isElement'
import insertAfter from './insertAfter'
import insertHTMLAfterEnd from './insertHTMLAfterEnd'
import hide from './hide'

/**
 * 用指定 DOM 节点或者将 HTML 字符转化成节点替换 reference 节点
 * ========================================================================
 * @method replace
 * @since 1.1.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/replaceWith
 * @param {HTMLElement|String} el
 * @param {HTMLElement} reference
 * @return {Element|null}
 */
const replace = (el, reference) => {
  let $replace
  let $parent

  /* istanbul ignore else */
  if (!isElement(reference) || (!isDOM(el) && !isHTML(el))) {
    return null
  }

  $parent = reference.parentNode

  if (!$parent) {
    return null
  }

  hide(reference)

  if (isDOM(el)) {
    $replace = insertAfter(el, reference)
  } else {
    $replace = insertHTMLAfterEnd(reference, el)
  }

  if (isFunction(reference.replaceWith)) {
    reference.replaceWith($replace)
  } else {
    reference.remove()
  }

  return $replace
}

export default replace
