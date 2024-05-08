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

  getNextSiblingBy(child, (node) => {
    if (!filter || filter(node)) {
      children[children.length] = node
    }
    return false
  })

  return children
}

export default getChildrenBy
