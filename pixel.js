import isString from './utils/types/isString'
import isNumber from './utils/types/isNumber'

/**
 * CSS 单位值和数组互换
 * ========================================================================
 * @method pixel
 * @since 1.2.0
 * @param {String|Number} val
 * @return {Number|String|Boolean}
 */
const pixel = (val) => {
  if (isString(val) && isNumber(val)) {
    return false
  }

  if (isString(val)) {
    if (val.indexOf('.') > -1) {
      return Math.ceil(Number(val.replace(/px$/i, '')))
    } else {
      return Number(val.replace(/\D/g, ''))
    }
  } else {
    return `${val}px`
  }
}

export default pixel
