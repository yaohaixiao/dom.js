import isElement from './utils/types/isElement'
import getPageX from './getPageX'
import getPageY from './getPageY'
import canPosition from './canPosition'

/**
 * 基于页面坐标获取元素的当前( X 和 Y )位置。
 * ========================================================================
 * @method getPageXY
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/ownerDocument
 * @param {HTMLElement} el
 * @return {Object|Boolean}
 */
const getPageXY = (el) => {
  if (!isElement(el) || !canPosition(el)) {
    return false
  }

  return {
    x: getPageY(el),
    y: getPageX(el)
  }
}

export default getPageXY
