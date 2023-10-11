import toHex from './toHex'
import { REG_RGB, REG_HEX } from './utils/enum'

/**
 * 返回将指定颜色（16 进制色值）转化成 RGB 色值
 * ========================================================================
 * @method toRGB
 * @param {String} color
 * @return {String}
 */
const toRGB = (color) => {
  let matches = []
  let rgb = color

  if (!REG_RGB.test(rgb)) {
    rgb = toHex(rgb)
  }

  matches = REG_HEX.exec(rgb)

  if (matches) {
    rgb =
      'rgb(' +
      [
        parseInt(matches[1], 16),
        parseInt(matches[2], 16),
        parseInt(matches[3], 16)
      ].join(', ') +
      ')'
  }

  return rgb
}

export default toRGB
