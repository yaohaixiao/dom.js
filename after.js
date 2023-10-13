import isHTML from './utils/types/isHTML'
import isDOM from './isDOM'
import isElement from './isElement'
import insertAfter from './insertAfter'
import insertHTMLAfterEnd from './insertHTMLAfterEnd'

/**
 * 在指定 DOM 节点后添加子节点或者将 HTML 字符转化成节点添加到后面
 * ========================================================================
 * @method after
 * @param {HTMLElement|String} el
 * @param {HTMLElement} reference
 * @return {Element|null}
 */
const after = (el, reference) => {
  /* istanbul ignore else */
  if (!isElement(reference) || (!isDOM(el) && !isHTML(el))) {
    return null
  }

  if (isDOM(el)) {
    return insertAfter(el, reference)
  } else {
    return insertHTMLAfterEnd(reference, el)
  }
}

export default after
