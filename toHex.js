import _HSLToRGB from './_HSLToRGB'
import {
  KEYWORDS,
  REG_HSL,
  REG_RGB,
  REG_HEX3,
  REG_HEX
} from './utils/enum'


/**
 * 返回将指定颜色（颜色英文名称或RGB格式或者 HSL 格式色值）转化成 16 进制色值
 * ========================================================================
 * @method toHex
 * @since 0.4.0
 * @param {String} color
 * @return {String|Boolean}
 */
const toHex = (color) => {
  let matches = []
  let hex
  let rgb
  let r
  let g
  let b

  if (!color) {
    return false
  }

  hex = KEYWORDS[color] || color

  if (REG_HEX.test(hex)) {
    return hex
  }

  if (REG_HSL.test(hex)) {
    matches = REG_HSL.exec(hex)
    rgb = _HSLToRGB(
      parseInt(matches[1], 10),
      parseInt(matches[2], 10),
      parseInt(matches[3], 10)
    )
    matches = [ hex, ...rgb ]
  } else {
    matches = REG_RGB.exec(hex)
  }

  if (matches) {
    r = matches[1]?.length === 1 ? '0' + matches[1] : Number(matches[1])
    g = matches[2]?.length === 1 ? '0' + matches[2] : Number(matches[2])
    b = matches[3]?.length === 1 ? '0' + matches[3] : Number(matches[3])

    hex = [ r.toString(16), g.toString(16), b.toString(16) ].join('')
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
