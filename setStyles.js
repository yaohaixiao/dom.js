import isString from './utils/types/isString'
import isObject from './utils/types/isObject'
import isElement from './isElement'

/**
 * 给 DOM 元素批量添加 CSS 样式
 * ========================================================================
 * @methods setStyles
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/cssText
 * @param {HTMLElement} el
 * @param {Object|String} styles
 * @returns {Boolean}
 */
const setStyles = (el, styles) => {
  let rules = ''

  if (!isElement(el) || (!isObject(styles) && !isString(styles))) {
    return false
  }

  if (isObject(styles)) {
    Object.keys(styles).forEach((prop) => {
      const val = styles[prop]
      rules += `${prop}:${val};`
    })
  } else {
    rules = styles
  }

  el.style.cssText += rules
}

export default setStyles
