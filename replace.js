import isHTML from './utils/types/isHTML'
import isDOM from './isDOM'
import isElement from './isElement'
import insertAfter from './insertAfter'
import insertHTMLAfterEnd from './insertHTMLAfterEnd'

/**
 * 用指定 DOM 节点或者将 HTML 字符转化成节点替换 reference 节点
 * ========================================================================
 * @method replace
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

  if (isDOM(el)) {
    $replace = insertAfter(el, reference)
  } else {
    $replace = insertHTMLAfterEnd(reference, el)
  }

  $parent.removeChild(reference)

  return $replace
}

export default replace
