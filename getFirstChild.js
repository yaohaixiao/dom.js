import isString from './utils/types/isString'
import isElement from './isElement'
import getEl from './getEl'
import getFirstChildBy from './getFirstChildBy'

/**
 * @method getFirstChild
 * @since 1.10.0
 * @param {HTMLElement|String} el
 * @param {Function} filter
 * @return {*|null}
 */
const getFirstChild = (el, filter) => {
  const $el = isString(el) ? getEl(el) : (isElement(el) ? el : null)

  if (!$el) {
    return null
  }

  return getFirstChildBy($el, filter)
}

export default getFirstChild
