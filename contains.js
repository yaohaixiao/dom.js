import isElement from './utils/types/isElement'
import isString from './utils/types/isString'
import _isAncestor from './_isAncestor'

/**
 * 判断某个 DOM 元素中是否包含另一个 DOM 元素
 * ========================================================================
 * @method contains
 * @param {HTMLElement|String} el
 * @param {HTMLElement} ancestor
 * @return {boolean}
 */
const contains = (el, ancestor) => {
  if (!isElement(ancestor)) {
    return false
  }

  if (isElement(el)) {
    return _isAncestor(ancestor, el)
  } else {
    /* istanbul ignore else */
    if (isString(el)) {
      return !!ancestor.querySelector(el)
    }
  }
}

export default contains
