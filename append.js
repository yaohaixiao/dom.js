import isString from './utils/types/isString'
import isHTML from './utils/types/isHTML'
import isDOM from './isDOM'
import isElement from './isElement'
import text from './text'
import insertAfter from './insertAfter'
import insertHTMLBeforeEnd from './insertHTMLBeforeEnd'
import isFunction from './utils/types/isFunction'
import html from './html'

/**
 * 将指定 DOM 节点或者 html 文本解析为 Element 元素，并将结果节点插入 el 元素自身
 * 内部的最后面。
 * ========================================================================
 * @method prepend
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/append
 * @param {HTMLElement|String} el
 * @param {HTMLElement} reference
 * @return {Element|Text|null}
 */
const append = (el, reference) => {
  let $target

  if (!isElement(reference) || (!isHTML(el) && !isString(el) && !isDOM(el))) {
    return null
  }

  if (isFunction(reference.append)) {
    if (isDOM(el)) {
      $target = el
    } else if (isHTML(el)) {
      $target = html(el)
    } else {
      $target = text(el)
    }

    reference.append($target)

    return $target
  } else {
    $target = reference.lastChild
  }

  if (isDOM(el)) {
    return insertAfter(el, $target)
  } else if (isHTML(el)) {
    return insertHTMLBeforeEnd($target, el)
  } else {
    return insertAfter(text(el), $target)
  }
}

export default append
