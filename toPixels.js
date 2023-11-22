import isString from './utils/types/isString'
import isNumber from './utils/types/isNumber'
import getStyle from './getStyle'

/**
 * @method toPixels
 * @since 1.4.0
 * @param rem
 * @param digits
 * @return {string|string}
 */
const toPixels = (rem, digits = 2) => {
  const base = parseFloat(getStyle(document.documentElement, 'font-size'))
  const size = isString(rem) ? parseFloat(rem.replace(/rem/i, '')) : rem

  return isNumber(size) ? `${(size * base).toFixed(digits)}px` : ''
}

export default toPixels
