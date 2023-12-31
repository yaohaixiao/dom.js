import isString from './utils/types/isString'
import isElement from './isElement'
import _isAncestor from './_isAncestor'
import getEl from './getEl'

/**
 * 判断某个 DOM 元素中是否包含另一个 DOM 元素
 * ========================================================================
 * @method contains
 * @param {HTMLElement|String} el
 * @param {HTMLElement} ancestor
 * @return {Boolean}
 */
const contains = (el, ancestor) => {
  if (!isElement(ancestor) || (!isElement(el) && !isString(el))) {
    return false
  }

  if (isElement(el)) {
    return _isAncestor(ancestor, el)
  } else {
    return !!getEl(el, ancestor)
  }
}

export default contains
