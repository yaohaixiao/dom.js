import isFunction from './utils/types/isFunction'
import isString from './utils/types/isString'
import isElement from './isElement'
import matches from './matches'

/**
 * 检测 DOM 节点是否为符合检测条件的节点
 * ========================================================================
 * @method isMatched
 * @param {HTMLElement} el
 * @param {Function|String} filter
 * @return {Boolean}
 */
const isMatched = (el, filter) => {
  if (!isElement(el) || (!isFunction(filter) && !isString(filter))) {
    return false
  }

  if (isFunction(filter)) {
    return filter(el)
  } else {
    return !!matches(el, filter)
  }
}

export default isMatched
