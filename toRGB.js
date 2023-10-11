import toHex from './toHex'
import { REG_RGB, REG_HEX } from './utils/enum'

const toRGB = (val) => {
  if (!REG_RGB.test(val)) {
    val = toHex(val)
  }

  if (REG_HEX.exec(val)) {
    val =
      'rgb(' +
      [
        parseInt(RegExp.$1, 16),
        parseInt(RegExp.$2, 16),
        parseInt(RegExp.$3, 16)
      ].join(', ') +
      ')'
  }

  return val
}

export default toRGB
