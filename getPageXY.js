import isElement from './utils/types/isElement'
import getPageX from './getPageX'
import getPageY from './getPageY'

const getPageXY = (el) => {
  if (!isElement(el)) {
    return null
  }

  return {
    x: getPageY(el),
    y: getPageX(el)
  }
}

export default getPageXY
