import isElement from './isElement'
import getOffsetLeft from './getOffsetLeft'
import getOffsetTop from './getOffsetTop'

/**
 * 获取 DOM 节点相对于窗口的 left 和 top 值
 * ========================================================================
 * @method getOffset
 * @param {HTMLElement} el - DOM 节点
 * @returns {Object|null}
 */
const getOffset = (el) => {
  let top
  let left
  let width
  let height

  if (!isElement(el)) {
    return null
  }

  top = getOffsetTop(el)
  left = getOffsetLeft(el)
  width = el.offsetWidth
  height = el.offsetHeight

  return {
    width,
    height,
    top,
    left
  }
}

export default getOffset
