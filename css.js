import isString from './utils/types/isString'
import isObject from './utils/types/isObject'
import isUndefined from './utils/types/isUndefined'
import isArray from './utils/types/isArray'
import isElement from './isElement'
import setStyle from './setStyle'
import getStyle from './getStyle'
import setStyles from './setStyles'
import getStyles from './getStyles'

/**
 * 用来设置或者查询 DOM 元素的 CSS 样式
 * ========================================================================
 * @method css
 * @param {HTMLElement} el
 * @param {String|Object|Array} attr
 * @param {String} [value]
 * @return {Object|String}
 */
const css = (el, attr, value) => {
  if (!isElement(el)) {
    return null
  }

  if (isString(attr)) {
    if (!isUndefined(value)) {
      setStyle(el, attr, value)
    } else {
      return getStyle(el, attr)
    }
  } else if (isObject(attr)) {
    if (isArray(attr)) {
      return getStyles(el, attr)
    }
    setStyles(el, attr)
  }
}

export default css
