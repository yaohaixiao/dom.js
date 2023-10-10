import isElement from './isElement'
import hasClass from './hasClass'
import addClass from './addClass'
import removeClass from './removeClass'

/**
 * 切换元素的类。
 * ========================================================================
 * @method
 * @param {HTMLElement} el
 * @param {String} className
 */
const toggleClass = (el, className) => {
  let classList

  if (!isElement(el) || !className) {
    return false
  }

  classList = el.classList

  if (classList?.toggle) {
    classList.toggle(className)
  } else if (hasClass(el, className)) {
    removeClass(el, className)
  } else {
    addClass(el, className)
  }
}

export default toggleClass
