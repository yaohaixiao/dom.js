import isString from '../types/isString'
import isFunction from '../types/isFunction'

/**
 * 清楚字符串起始位置所有的空格
 * ========================================================================
 * @method trim
 * @param {string} str
 * @returns {string|Boolean}
 */
const trim = (str) => {
  if (!isString(str)) {
    return false
  }

  if (isFunction(str.trim)) {
    return str.trim()
  } else {
    return str.replace(/(^\s+)|(\s+$)/g, '')
  }
}

export default trim
