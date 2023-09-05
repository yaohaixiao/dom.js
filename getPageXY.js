import isElement from './utils/isElement'
import getPageX from './getPageX'
import getPageY from './getPageY'

const getPageXY = (el) => {
  if (!isElement(el)) {
    return false
  }

  return {
    x: getPageY(el),
    y: getPageX(el)
  }
}

export default getPageXY
