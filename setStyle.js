import toCamel from './utils/string/toCamel'
import isString from './utils/types/isString'
import isUndefined from './utils/types/isUndefined'
import isElement from './isElement'

/**
 * 给 DOM 元素添加 CSS 样式
 * ========================================================================
 * @method setStyle
 * @param {HTMLElement} el
 * @param {String} attr
 * @param {String} val
 */
const setStyle = (el, attr, val) => {
  let prop

  if (!isElement(el) || !isString(attr) || isUndefined(attr)) {
    return false
  }

  prop = toCamel(attr)

  if (prop === 'float') {
    prop = 'cssFloat'
  }

  el.style[prop] = val
}

export default setStyle
