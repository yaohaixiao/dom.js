import isHTML from './utils/types/isHTML'
import isDOM from './isDOM'
import isElement from './isElement'
import insertBefore from './insertBefore'
import insertHTMLBeforeBegin from './insertHTMLBeforeBegin'

/**
 * 在指定 DOM 节点后添加子节点或者将 HTML 字符转化成节点添加到前面
 * ========================================================================
 * @method after
 * @param {HTMLElement|String} el
 * @param {HTMLElement} reference
 * @return {Element|null}
 */
const before = (el, reference) => {
  if (!isElement(reference) || (!isDOM(el) && !isHTML(el))) {
    return null
  }

  if (isDOM(el)) {
    return insertBefore(el, reference)
  } else {
    return insertHTMLBeforeBegin(reference, el)
  }
}

export default before
