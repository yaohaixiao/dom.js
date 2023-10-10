import toCamel from './utils/string/toCamel'
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
  const prop = attr === 'float' ? 'cssFloat' : toCamel(attr)

  if (!isElement(el)) {
    return false
  }

  return getComputedStyle(el)[prop]
}

export default getStyle
