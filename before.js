import isHTML from './utils/types/isHTML'
import isElement from './isElement'
import insertBefore from './insertBefore'
import insertHTMLBeforeBegin from './insertHTMLBeforeBegin'

/**
 * 在指定 DOM 节点后添加子节点或者将 HTML 字符转化成节点添加到前面
 * ========================================================================
 * @method after
 * @param {HTMLElement|String} el
 * @param {HTMLElement} reference
 * @return {Element|Boolean}
 */
const before = (el, reference) => {
  if (!isElement(reference)) {
    return false
  }

  if (isElement(el)) {
    return insertBefore(el, reference)
  } else if (isHTML(el)) {
    return insertHTMLBeforeBegin(reference, el)
  }
}

export default before
