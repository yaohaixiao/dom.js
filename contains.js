import isElement from './utils/types/isElement'
import isString from './utils/types/isString'
import isAncestor from './isAncestor'

const contains = (ancestor, descendent) => {
  if (!isElement(ancestor)) {
    return false
  }

  if (isElement(descendent)) {
    return isAncestor(ancestor, descendent)
  } else if (isString(descendent)) {
    return !!ancestor.querySelector(descendent)
  }
}

export default contains
