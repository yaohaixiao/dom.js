import getScrollTotalX from './getScrollTotalX'
import getScrollTotalY from './getScrollTotalY'

const getScrollTotalXY = (el) => {
  return {
    x: getScrollTotalX(el),
    y: getScrollTotalY(el)
  }
}

export default getScrollTotalXY
