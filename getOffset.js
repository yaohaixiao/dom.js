import getOffsetLeft from './getOffsetLeft'
import getOffsetTop from './getOffsetTop'

/**
 * 获取 DOM 节点相对于窗口的 left 和 top 值
 * ========================================================================
 * @method getOffset
 * @param {HTMLElement} el - DOM 节点
 * @returns {{left: Number, top: Number}}
 */
const getOffset = (el) => {
  const x = getOffsetTop(el)
  const y = getOffsetLeft(el)

  return {
    x,
    y
  }
}

export default getOffset
