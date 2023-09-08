import isElement from './utils/types/isElement'
import isArray from './utils/types/isArray'
import removeAttribute from './removeAttribute'

const removeAttributes = (el, attrs) => {
  if (!isElement(el) || !attrs || !isArray(el)) {
    return false
  }

  attrs.forEach((attr) => {
    removeAttribute(el, attr)
  })
}

export default removeAttributes
