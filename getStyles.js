import toCamel from './utils/string/toCamel'
import isUndefined from './utils/types/isUndefined'
import isArray from './utils/types/isArray'
import isElement from './isElement'

/**
 * 获取 DOM 元素 attrs 数组中指定的多个 CSS 样式值
 * ========================================================================
 * @param {HTMLElement} el
 * @param {Array} attrs
 * @returns {Object|null}
 */
const getStyles = (el, attrs = []) => {
  const styles = {}
  let props = null
  let keys

  if (
    !isElement(el) ||
    (isElement(el) && !isArray(attrs)) ||
    (isArray(attrs) && attrs.length < 1)
  ) {
    return props
  }

  props = getComputedStyle(el)
  keys = Object.keys(props)

  /* istanbul ignore else */
  if (attrs.length > 0) {
    keys = attrs
  }

  keys.forEach((attr) => {
    const prop = toCamel(attr)
    const isNumber = /\d+/g
    const value = props[prop]

    /* istanbul ignore else */
    if (!isUndefined(prop) && !isNumber.test(prop) && !isUndefined(value)) {
      styles[prop] = props[prop]
    }
  })

  return styles
}

export default getStyles
