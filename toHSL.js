import {
  REG_RGB,
  REG_HEX
} from './utils/enum'
import toHex from './toHex'

const toHSL = (color) => {
  let r
  let g
  let b
  let hex
  let matches
  let l
  let s
  let h

  if (!color) {
    return false
  }

  // hex to hsl
  if (!REG_RGB.test(color)) {
    hex = toHex(color)
    matches = REG_HEX.exec(hex)

    if (matches) {
      r = parseInt(matches[1], 16)
      g = parseInt(matches[2], 16)
      b = parseInt(matches[3], 16)
    }
  } else {
    // rgb to hsl
    matches = REG_RGB.exec(color)

    if (matches) {
      r = matches[1]
      g = matches[2]
      b = matches[3]
    }
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

  return [
    60 * h < 0 ? 60 * h + 360 : 60 * h,
    100 * (s ? (l <= 0.5 ? s / (2 * l - s) : s / (2 - (2 * l - s))) : 0),
    (100 * (2 * l - s)) / 2
  ]
}

export default toHSL
