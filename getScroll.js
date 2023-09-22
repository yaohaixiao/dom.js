import getScrollLeft from './getScrollLeft'
import getScrollTop from './getScrollTop'

/**
 * 获取 DOM 元素的滚动条横向和纵向滚动距离
 * ========================================================================
 * @method getScrollLeft
 * @param {HTMLElement|Window} [el]
 * @return {Object}
 */
const getScroll = (el = window) => {
  return {
    top: getScrollTop(el),
    left: getScrollLeft(el)
  }
}

export default getScroll
