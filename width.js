import isElement from './utils/types/isElement'
import isNumber from './utils/types/isNumber'
import setStyle from './setStyle'
import offset from './offset'
import isUndefined from './utils/types/isUndefined'

const width = (el, val) => {
  let value

  if (!isElement(el)) {
    return false
  }

  if (isUndefined(val)) {
    return offset(el).width
  } else {
    if (isNumber(val)) {
      value = `${val}px`
    } else {
      value = `${val.replace(/\D/gi, '')}px`
    }
    setStyle(el, 'width', value)
  }
}

export default width
