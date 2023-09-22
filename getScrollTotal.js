import getScrollTotalLeft from './getScrollTotalLeft'
import getScrollTotalTop from './getScrollTotalTop'

/**
 * 获取 DOM 元素的滚动条横向与纵向滚动距离。
 * @method getScrollTotal
 * @param {HTMLElement|Window} [el]
 * @return {{top: (*[]|*[]|*), left: (*[]|*[]|*)}}
 */
const getScrollTotal = (el = window) => {
  return {
    top: getScrollTotalTop(el),
    left: getScrollTotalLeft(el)
  }
}

export default getScrollTotal
