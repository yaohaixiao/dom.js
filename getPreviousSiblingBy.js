import isElement from './isElement'
import isMatched from './isMatched'
import getPreviousSibling from './getPreviousSibling'

/**
 * 通过过滤器获取 DOM 元素匹配的前面的邻居元素节点
 * ========================================================================
 * @method getPreviousSiblingBy
 * @param {HTMLElement} el
 * @param {Function|String} filter
 * @return {Element|null}
 */
const getPreviousSiblingBy = (el, filter) => {
  let $el = isElement(el) ? el : null

  while ($el) {
    $el = getPreviousSibling($el)

    if (isMatched($el, filter)) {
      return $el
    }
  }

  return null
}

export default getPreviousSiblingBy
