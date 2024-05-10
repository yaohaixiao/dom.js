import isFunction from './utils/types/isFunction'
import isElement from './isElement'
import isMatched from './isMatched'
import getPreviousSiblingBy from './getPreviousSiblingBy'

/**
 * @method getLastChildBy
 * @since 1.10.0
 * @param {HTMLElement} el
 * @param {ChildNode} el.lastChild
 * @param {Function} filter
 * @return {HTMLElement|ChildNode|null}
 */
const getLastChildBy = (el, filter) => {
  let child = null

  if (!isElement(el) || !isFunction(filter)) {
    return child
  }

  if (isMatched(el.lastChild, filter)) {
    child = el.lastChild
  }

  return child || getPreviousSiblingBy(el.lastChild, filter)
}

export default getLastChildBy
