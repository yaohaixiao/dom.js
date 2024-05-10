import isElement from './isElement'
import getChildren from './getChildren'

/**
 * 获取 DOM 元素下所有 HTMKLElement 类型的 DOM 元素
 * ========================================================================
 * @method childern
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild
 * @param {HTMLElement} el
 * @param {Function|Boolean} filter
 * @return {Array}
 */
const children = (el, filter) => {
  if (!isElement(el)) {
    return []
  }

  return getChildren(el, filter)
}

export default children
