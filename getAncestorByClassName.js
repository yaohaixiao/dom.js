import isString from './utils/types/isString'
import isElement from './isElement'
import parent from './parent'
import hasClass from './hasClass'
import getAncestorBy from './getAncestorBy'

/**
 * @method getAncestorByClassName
 * @since 1.10.0
 * @param {HTMLElement} el
 * @param {String} className
 * @return {HTMLElement|null}
 */
const getAncestorByClassName = (el, className) => {
  let $ancestor = null
  let filter

  if (!isElement(el) || !isString(className)) {
    return $ancestor
  }

  $ancestor = parent(el)

  if (!$ancestor) {
    return null
  }

  filter = (el) => {
    return hasClass(el, className)
  }

  return getAncestorBy($ancestor, filter)
}

export default getAncestorByClassName
