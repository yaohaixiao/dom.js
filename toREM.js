import isString from './utils/types/isString'
import isNumber from './utils/types/isNumber'
import getStyle from './getStyle'

/**
 * @method toREM
 * @sice 1.4.0
 * @param {String|Number} pixels
 * @return {string|string}
 */
const toREM = (pixels, digits = 2) => {
  const base = parseFloat(getStyle(document.documentElement, 'font-size'))
  const size = isString(pixels) ? parseFloat(pixels.replace(/px/i, '')) : pixels

  return isNumber(size) ? `${((1 / base) * size).toFixed(digits)}rem` : ''
}

export default toREM
