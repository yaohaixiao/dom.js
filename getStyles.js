import toCamel from './utils/string/toCamel'
import isUndefined from './utils/types/isUndefined'
import isArray from './utils/types/isArray'
import isElement from './isElement'

/**
 * 获取 DOM 元素的某个 CSS 样式值
 * ========================================================================
 * @param {HTMLElement} el
 * @param {Array} [attrs]
 * @returns {*}
 */
const getStyles = (el, attrs = []) => {
  const styles = {}
  let props = null

  if (!isElement(el) || !isArray(attrs) || attrs.length < 1) {
    return props
  }

  props = getComputedStyle(el)

  attrs.forEach((attr) => {
    const prop = toCamel(attr)
    const value = props[prop]

    if (!isUndefined(value)) {
      styles[prop] = value
    }
  })

  return styles
}

export default getStyles
