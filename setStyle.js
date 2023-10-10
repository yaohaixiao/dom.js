import toCamel from './utils/string/toCamel'
import isElement from './isElement'

/**
 * 给 DOM 元素添加 CSS 样式
 * ========================================================================
 * @method getStyle
 * @param {HTMLElement} el
 * @param {String} attr
 * @param {String} val
 * @return {boolean}
 */
const setStyle = (el, attr, val) => {
  let prop

  if (!isElement(el)) {
    return false
  }

  prop = toCamel(attr)

  if (prop === 'float') {
    prop = 'cssFloat'
  }

  el.style[prop] = val
}

export default setStyle
