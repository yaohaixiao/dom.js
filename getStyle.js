import toCamel from './utils/string/toCamel'
import isString from './utils/types/isString'
import isElement from './isElement'
/**
 * 获取 DOM 元素的某个 CSS 样式值
 * ========================================================================
 * @method getStyle
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle
 * @param {HTMLElement} el
 * @param {String} attr
 * @returns {*}
 */
const getStyle = (el, attr) => {
  let prop

  /* istanbul ignore else */
  if (!isElement(el) || !isString(attr)) {
    return false
  }

  prop = attr === 'float' ? 'cssFloat' : toCamel(attr)

  return getComputedStyle(el)[prop]
}

export default getStyle
