import isElement from './utils/types/isElement'
import isString from './utils/types/isString'
import isObject from './utils/types/isObject'
import extend from './utils/lang/extend'

/**
 * 给元素添加样式
 * ====================================================
 * @param {HTMLElement} el
 * @param {Object|String} styles
 * @returns {any}
 */
const setStyles = (el, styles) => {
  let rules = ''

  if (!isElement(el)) {
    return false
  }

  if (el.style.cssText) {
    if (isObject(styles)) {
      Object.keys(styles).forEach((prop) => {
        const val = styles[prop]
        rules += `${prop}:${val};`
      })
    } else if (isString(styles)) {
      rules = styles
    }

    el.style.cssText += rules
  } else {
    if (isObject(styles)) {
      extend(el.style, styles)
    }
  }
}

export default setStyles
