import isString from './utils/types/isString'
import isElement from './isElement'
import getEl from './getEl'
import getLastChildBy from './getLastChildBy'

/**
 * @method getLastChild
 * @since 1.10.0
 * @param {HTMLElement|String} el
 * @param {Function} filter
 * @return {HTMLElement|null}
 */
const getLastChild = (el, filter) => {
  const $el = isString(el) ? getEl(el) : (isElement(el) ? el : null)

  if (!$el) {
    return null
  }

  return getLastChildBy($el, filter)
}

export default getLastChild
