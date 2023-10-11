import { KEYWORDS, REG_RGB, REG_HEX3 } from './utils/enum'

/**
 * 返回将指定颜色（颜色英文名称或RGB格式色值）转化成 16 进制色值
 * ========================================================================
 * @method toHex
 * @param {String} color
 * @return {String}
 */
const toHex = (color) => {
  let hex = KEYWORDS[color] || color
  let matches = REG_RGB.exec(hex)
  let r
  let g
  let b

  if (matches) {
    r = matches[1]?.length === 1 ? '0' + matches[1] : Number(matches[1])
    g = matches[2]?.length === 1 ? '0' + matches[2] : Number(matches[2])
    b = matches[3]?.length === 1 ? '0' + matches[3] : Number(matches[3])

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
