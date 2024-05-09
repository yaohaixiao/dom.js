import getFirstChildBy from './getFirstChildBy'
import getNextSiblingBy from './getNextSiblingBy'

/**
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
