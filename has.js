import isString from './utils/types/isString'
import isFunction from './utils/types/isFunction'
import isCollection from './isCollection'
import isElement from './isElement'
import getEl from './getEl'
import filter from './filter'

/**
 * 将匹配的元素集减少为具有与选择器或过滤函数匹配的子体的元素集。
 * ========================================================================
 * @method has
 * @since 1.2.0
 * @param {HTMLElement|NodeList} el
 * @param {String|Function} selector
 * @return {Array}
 */
const has = (el, selector) => {
  if (
    (!isElement(el) && !isCollection(el)) ||
    (!isString(selector) && !isFunction(selector))
  ) {
    return []
  }

  if (isElement(el)) {
    /* istanbul ignore else */
    if (isString(selector)) {
      return [...getEl(selector, el, true)]
    }
  } else {
    return filter(el, selector)
  }
}

export default has
