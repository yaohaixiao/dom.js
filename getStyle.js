import toCamel from './utils/toCamel'
import isElement from './utils/isElement'
/**
 * 获取HTML元素的某个CSS样式值
 * ====================================================
 * @param el
 * @param attr
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
