import getScrollLeft from './getScrollLeft'
import getScrollTop from './getScrollTop'

const getScroll = (el = window) => {
  return {
    top: getScrollTop(el),
    left: getScrollLeft(el)
  }
}

export default getScroll
