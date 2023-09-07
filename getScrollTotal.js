import getScrollTotalLeft from './getScrollTotalLeft'
import getScrollTotalTop from './getScrollTotalTop'

const getScrollTotal = (el) => {
  return {
    top: getScrollTotalTop(el),
    left: getScrollTotalLeft(el)
  }
}

export default getScrollTotal
