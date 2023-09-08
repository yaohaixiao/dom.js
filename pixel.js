import isString from './utils/types/isString'
import isNumber from './utils/types/isNumber'

const pixel = (val) => {
  if (isString(val)) {
    if (val.indexOf('.') > -1) {
      return Math.ceil(Number(val.replace(/px$/i, '')))
    } else {
      return Number(val.replace(/\D/gi, ''))
    }
  } else if (isNumber(val)) {
    return `${val}px`
  }
}

export default pixel
