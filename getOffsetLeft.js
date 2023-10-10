import isElement from './isElement'

/**
 * 获取 DOM 节点相对于窗口的 left（横坐标）值
 * ========================================================================
 * @method getOffsetLeft
 * @param {HTMLElement} el - DOM 节点
 * @returns {Number}
 */
const getOffsetLeft = (el) => {
  let left = 0

  if (!isElement(el)) {
    return left
  }

  left = el.offsetLeft

  /* istanbul ignore else */
  if (el.offsetParent !== null) {
    left += getOffsetLeft(el.offsetParent)
  }

  return left
}

export default getOffsetLeft
