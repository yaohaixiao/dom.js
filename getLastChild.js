import isString from './utils/types/isString'
import isFunction from './utils/types/isFunction'
import isElement from './isElement'
import getEl from './getEl'
import getLastChildBy from './getLastChildBy'
import isBoolean from './utils/types/isBoolean'

/**
 * @method getLastChild
 * @since 1.10.0
 * @param {HTMLElement|String} el
 * @param {Function} filter
 * @return {HTMLElement|ChildNode|null}
 */
const getLastChild = (el, filter) => {
  const $el = isString(el) ? getEl(el) : isElement(el) ? el : null

  if (!$el) {
    return null
  }

  if (isFunction(filter)) {
    return getLastChildBy($el, filter)
  } else {
    if (isBoolean(filter) && filter) {
      return $el.lastElementChild
    } else {
      return $el.lastChild
    }
  }
}

export default getLastChild
