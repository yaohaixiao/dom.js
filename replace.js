import isHTML from './utils/types/isHTML'
import isFunction from './utils/types/isFunction'
import isDOM from './isDOM'
import isElement from './isElement'
import insertAfter from './insertAfter'
import hide from './hide'
import html from './html'

/**
 * 用指定 DOM 节点或者将 HTML 字符转化成节点替换 reference 节点
 * ========================================================================
 * @method replace
 * @since 1.1.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/replaceWith
 * @param {HTMLElement|String|Function} replacement
 * @param {HTMLElement} el
 * @return {Element|null}
 */
const replace = (replacement, el) => {
  let $replace
  let $parent

  /* istanbul ignore else */
  if (
    !isElement(el) ||
    (!isDOM(replacement) && !isHTML(replacement) && isFunction(replacement))
  ) {
    return null
  }

  $parent = el.parentNode

  if (!$parent) {
    return null
  }

  hide(el)

  if (isDOM(replacement)) {
    $replace = insertAfter(replacement, el)
  } else if (isHTML(replacement)) {
    $replace = html(replacement)
  } else if (isFunction(replacement)) {
    $replace = replacement()
  }

  if (isFunction(el.replaceWith)) {
    el.replaceWith($replace)
  } else {
    el.remove()
  }

  return $replace
}

export default replace
