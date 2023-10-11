import { KEYWORDS, REG_RGB, REG_HEX3 } from './utils/enum'

/**
 *
 * @method toHex
 * @param {String} val
 * @return {String}
 */
const toHex = (val) => {
  let hex = KEYWORDS[val] || val
  let r
  let g
  let b

  if (REG_RGB.exec(hex)) {
    r = RegExp.$1.length === 1 ? '0' + RegExp.$1 : Number(RegExp.$1)
    g = RegExp.$2.length === 1 ? '0' + RegExp.$2 : Number(RegExp.$2)
    b = RegExp.$3.length === 1 ? '0' + RegExp.$3 : Number(RegExp.$3)

    hex = [r.toString(16), g.toString(16), b.toString(16)].join('')
  }

  if (hex.length < 6) {
    hex = hex.replace(REG_HEX3, '$1$1')
  }

  /* istanbul ignore else */
  if (hex !== 'transparent' && hex.indexOf('#') < 0) {
    hex = '#' + hex
  }

  return hex.toLowerCase()
}

export default toHex
