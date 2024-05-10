import isFunction from './utils/types/isFunction'
import isElement from './isElement'
import isMatched from './isMatched'
import getNextSiblingBy from './getNextSiblingBy'

/**
 * 通过过滤函数获取指定 DOM 元素下的（全部） childNode 元素
 * ========================================================================
 * @method getFirstChildBy
 * @since 1.10.0
 * @param {HTMLElement} el
 * @param {ChildNode} el.firstChild
 * @param filter
 * @return {HTMLElement|null}
 */
const getFirstChildBy = (el, filter) => {
  let child = null

  if (!isElement(el) || !isFunction(filter)) {
    return child
  }

  if (isMatched(el.firstChild, filter)) {
    child = el.firstChild
  }

  return child || getNextSiblingBy(el.firstChild, filter)
}

export default getFirstChildBy
