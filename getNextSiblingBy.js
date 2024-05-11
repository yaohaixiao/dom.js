import isElement from './isElement'
import isText from './isText'
import isMatched from './isMatched'
import getNextSibling from './getNextSibling'

/**
 * 通过过滤器获取 DOM 元素匹配的后面的邻居元素节点
 * ========================================================================
 * @method getNextSiblingBy
 * @param {HTMLElement|Text} el
 * @param {Function|String} filter
 * @return {HTMLElement|null}
 */
const getNextSiblingBy = (el, filter) => {
  let $el = getNextSibling(el, false)

  if (!isText(el) && !isElement(el)) {
    return $el
  }

  while ($el) {
    if (isMatched($el, filter)) {
      return $el
    }

    $el = getNextSibling($el, false)
  }

  return null
}

export default getNextSiblingBy
