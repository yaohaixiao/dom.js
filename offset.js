import isElement from './isElement'
import getOffset from './getOffset'

/**
 * 获取 DOM 节点相对于窗口的 left 和 top 值
 * ========================================================================
 * @method offset
 * @alias getOffset
 * @param el
 * @return {Object}
 */
const offset = (el) => {
  if (!isElement(el)) {
    return null
  }

  return getOffset(el)
}

export default offset
