import isElement from './utils/types/isElement'
import isMatched from './isMatched'
import getNextSibling from './getNextSibling'

/**
 * 通过过滤器获取 DOM 元素匹配的后面的邻居元素节点
 * ========================================================================
 * @method getNextSiblingBy
 * @param {HTMLElement} el
 * @param {Function|String} filter
 * @return {Element|null}
 */
const getNextSiblingBy = (el, filter) => {
  let $el = isElement(el) ? el : null

  while ($el) {
    $el = getNextSibling($el)

    if (isMatched($el, filter)) {
      return $el
    }
  }

  return null
}

export default getNextSiblingBy
