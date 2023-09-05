/**
 * 获取 DOM 节点相对于窗口的 left（横坐标）值
 * ========================================================================
 * @method getOffsetLeft
 * @param {HTMLElement} el - DOM 节点
 * @returns {Number}
 */
const getOffsetLeft = (el) => {
  let left = el.offsetLeft

  if (el.offsetParent !== null) {
    left += getOffsetLeft(el.offsetParent)
  }

  return left
}

export default getOffsetLeft
