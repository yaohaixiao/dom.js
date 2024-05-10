import getFirstChildBy from './getFirstChildBy'
import getNextSiblingBy from './getNextSiblingBy'

/**
 * 通过过滤函数获取指定 DOM 元素下的 childNode 元素
 * ========================================================================
 * @method getChildrenBy
 * @since 1.10.0
 * @param {HTMLElement} el
 * @param {Function} filter
 * @return {HTMLElement[]|*[]}
 */
const getChildrenBy = (el, filter) => {
  const child = getFirstChildBy(el, filter)
  const children = child ? [child] : []
  let $next = getNextSiblingBy(child, filter)

  while ($next) {
    children.push($next)

    $next = getNextSiblingBy(child, filter)
  }

  return children
}

export default getChildrenBy
