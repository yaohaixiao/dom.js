import isString from './utils/types/isString'
import isFunction from './utils/types/isFunction'
import isElement from './isElement'
import getEl from './getEl'
import isCollection from './isCollection'

/**
 * 移除指定 DOM 元素
 * ========================================================================
 * @method remove
 * @since 1.4.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/remove
 * @param {HTMLElement|String} el
 * @return {boolean}
 */
const remove = (el) => {
  let $el

  if (!isElement(el) && !isString(el)) {
    return false
  }

  if (isElement(el)) {
    if (isFunction(el.remove)) {
      el.remove()
    } else {
      el.parentNode.removeChild(el)
    }
  } else {
    $el = getEl(el)

    if (isElement($el)) {
      remove($el)
    }
  }
}

export default remove
