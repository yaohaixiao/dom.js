/**
 * 获取 DOM 节点相对于窗口的 top （纵坐标）值
 * ========================================================================
 * @method getOffsetTop
 * @param {HTMLElement} el - DOM 节点
 * @returns {Number}
 */
const getOffsetTop = (el) => {
  let top = el.offsetTop

  if (el.offsetParent !== null) {
    top += getOffsetTop(el.offsetParent)
  }

  return top
}

export default getOffsetTop
