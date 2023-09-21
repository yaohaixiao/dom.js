import isElement from './utils/types/isElement'
import getOffset from './getOffset'

const offset = (el) => {
  if (!isElement(el)) {
    return false
  }

  return getOffset(el)
}

export default offset
