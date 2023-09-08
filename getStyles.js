import toCamel from './utils/string/toCamel'
import isElement from './utils/types/isElement'
import isUndefined from './utils/types/isUndefined'

/**
 * 获取HTML元素的某个CSS样式值
 * ====================================================
 * @param el
 * @param attrs
 * @returns {*}
 */
const getStyles = (el, attrs) => {
  const styles = {}
  let props = null

  if (!isElement(el)) {
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
