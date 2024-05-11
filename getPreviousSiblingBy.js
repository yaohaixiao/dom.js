import isElement from './isElement'
import isText from './isText'
import isMatched from './isMatched'
import getPreviousSibling from './getPreviousSibling'

/**
 * 通过过滤器获取 DOM 元素匹配的前面的邻居元素节点
 * ========================================================================
 * @method getPreviousSiblingBy
 * @param {HTMLElement|Text} el
 * @param {Function|String} filter
 * @return {HTMLElement|null}
 */
const getPreviousSiblingBy = (el, filter) => {
  let $el = getPreviousSibling(el, false)

  if (!isText(el) && !isElement(el)) {
    return $el
  }

  while ($el) {
    if (isMatched($el, filter)) {
      return $el
    }

    $el = getPreviousSibling($el, false)
  }

  return null
}

export default getPreviousSiblingBy
