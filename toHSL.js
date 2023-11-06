import toHex from './toHex'
import { REG_RGB, REG_HEX, REG_HSL } from './utils/enum'

/**
 * 指定颜色（颜色英文名称、16 进制或RGB格式色值）转化成 HSL 格式色值
 * ========================================================================
 * @method toHSL
 * @since 1.3.0
 * @see https://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/
 * @param {String} color
 * @returns {string|boolean}
 */
const toHSL = (color) => {
  let matches = []
  let hex
  let r
  let g
  let b
  let l
  let s
  let h

  if (!color) {
    return false
  }

  if (REG_HSL.test(color)) {
    return color
  }

  // hex to hsl
  if (!REG_RGB.test(color)) {
    hex = toHex(color)
    matches = REG_HEX.exec(hex)

    r = parseInt(matches[1], 16)
    g = parseInt(matches[2], 16)
    b = parseInt(matches[3], 16)
  } else {
    // rgb to hsl
    matches = REG_RGB.exec(color)

    r = matches[1]
    g = matches[2]
    b = matches[3]
  }

  r /= 255
  g /= 255
  b /= 255

  l = Math.max(r, g, b)
  s = l - Math.min(r, g, b)
  h = s
    ? l === r
      ? (g - b) / s
      : l === g
      ? 2 + (b - r) / s
      : 4 + (r - g) / s
    : 0

  return `hsl(${60 * h < 0 ? 60 * h + 360 : 60 * h}, ${
    100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0)
  }%, ${(100 * (2 * l - s)) / 2}%)`
}

export default toHSL
