import isHTML from './utils/types/isHTML'
import isString from './utils/types/isString'
import isFunction from './utils/types/isFunction'
import isDOM from './isDOM'
import isElement from './isElement'
import text from './text'
import html from './html'
import insertBefore from './insertBefore'
import insertHTMLBeforeBegin from './insertHTMLBeforeBegin'

/**
 * 将指定 DOM 节点或者 html 文本解析为 Element 元素，并将结果节点插入 reference 元素
 * 自身内部的最前面或者 reference 元素前面。
 * ========================================================================
 * @method prepend
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/prepend
 * @param {HTMLElement|String} el
 * @param {HTMLElement} reference
 * @return {Element|Text|null}
 */
const prepend = (el, reference) => {
  let $target

  if (!isElement(reference) || (!isHTML(el) && !isString(el) && !isDOM(el))) {
    return null
  }

  if (isFunction(reference.prepend)) {
    if (isDOM(el)) {
      $target = el
    } else if (isHTML(el)) {
      $target = html(el)
    } else {
      $target = text(el)
    }

    reference.prepend($target)

    return $target
  } else {
    $target = reference.firstChild
  }

  if (isDOM(el)) {
    return insertBefore(el, $target)
  } else if (isHTML(el)) {
    return insertHTMLBeforeBegin($target, el)
  } else {
    return insertBefore(text(el), $target)
  }
}

export default prepend
