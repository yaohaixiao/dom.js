import isAncestor from './isAncestor'
import isElement from './utils/isElement'
import isString from './utils/isString'

const has = (ancestor, descendent) => {
  if (!isElement(ancestor)) {
    return false
  }

  if (isElement(descendent)) {
    return isAncestor(ancestor, descendent)
  } else if (isString(descendent)) {
    return !!ancestor.querySelector(descendent)
  }
}

export default has
