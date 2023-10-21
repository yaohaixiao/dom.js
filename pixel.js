import isString from './utils/types/isString'
import isNumber from './utils/types/isNumber'

/**
 * CSS 单位值和数组互换
 * ========================================================================
 * @method pixel
 * @since 1.2.0
 * @param {String|Number} val
 * @return {Number|String|Array|Boolean}
 */
const pixel = (val) => {
  const parse = (str) => {
    const value = str.replace(/\D*$/i, '')

    if (value.indexOf('.') > -1) {
      return Math.ceil(Number(value))
    } else {
      return Number(value)
    }
  }

  if (!isString(val) && !isNumber(val)) {
    return false
  }

  if (isString(val)) {
    if (val.indexOf(' ') > -1) {
      return val.split(' ').map((item) => pixel(item))
    } else {
      return parse(val)
    }
  } else {
    return `${val}px`
  }
}

export default pixel
