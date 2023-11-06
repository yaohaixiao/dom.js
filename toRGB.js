import _HSLToRGB from './_HSLToRGB'
import toHex from './toHex'
import { REG_RGB, REG_HEX, REG_HSL } from './utils/enum'

/**
 * 返回将指定颜色（颜色英文名称、16 进制或者 HSL 色值）转化成 RGB 色值
 * ========================================================================
 * @method toRGB
 * @since 0.4.0
 * @param {String} color
 * @return {String|Boolean}
 */
const toRGB = (color) => {
  let matches = []
  let hex
  let rgb
  let r
  let g
  let b

  if (!color) {
    return false
  }

  if (REG_RGB.test(color)) {
    return color
  }

  if (REG_HSL.test(color)) {
    matches = REG_HSL.exec(color)

    rgb = _HSLToRGB(
      parseInt(matches[1], 10),
      parseInt(matches[2], 10),
      parseInt(matches[3], 10)
    )

    r = rgb[0]
    g = rgb[1]
    b = rgb[2]
  } else {
    if (!REG_RGB.test(color)) {
      hex = toHex(color)
    }

    matches = REG_HEX.exec(hex)

    r = parseInt(matches[1], 16)
    g = parseInt(matches[2], 16)
    b = parseInt(matches[3], 16)
  }

  return 'rgb(' + [r, g, b].join(', ') + ')'
}

export default toRGB
