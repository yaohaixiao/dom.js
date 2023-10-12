import isString from './utils/types/isString'
import getStyle from './getStyle'
import toHex from './toHex'
import toRGB from './toRGB'
import isElement from './isElement'
import { COLOR_PROPS } from './utils/enum'

/**
 * 获取DOM 元素 attr 指定的颜色属性值，可以指定 16 进制或者 RGB 格式
 * ========================================================================
 * @method getColor
 * @since 0.4.0
 * @param {HTMLElement} el
 * @param {String} attr
 * @param {Boolean} [isHex]
 * @return {String|Boolean}
 */
const getColor = (el, attr, isHex = true) => {
  let color

  if (!isElement(el) || !isString(attr) || COLOR_PROPS.indexOf(attr) === -1) {
    return false
  }

  color = getStyle(el, attr)

  if (!color) {
    return 'transparent'
  }

  return isHex ? toHex(color) : toRGB(color)
}

export default getColor
