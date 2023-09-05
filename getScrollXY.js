import getScrollX from './getScrollX'
import getScrollY from './getScrollY'

const getScrollXY = (el = window) => {
  return {
    x: getScrollX(el),
    y: getScrollY(el)
  }
}

export default getScrollXY
