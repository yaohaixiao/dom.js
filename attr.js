import isElement from './utils/isElement'
import isString from './utils/isString'
import isObject from './utils/isObject'
import isArray from './utils/isArray'
import setAttribute from './setAttribute'
import setAttributes from './setAttributes'
import getAttribute from './getAttribute'
import getAttributes from './getAttributes'

const attr = (el, attr, value) => {
  if (!isElement(el)) {
    return false
  }

  if (!attr && !value) {
    return getAttributes(el)
  }

  if (isString(attr)) {
    if (typeof value !== 'undefined') {
      setAttribute(el, attr, value)
    } else {
      return getAttribute(el, attr)
    }
  } else if (isObject(attr)) {
    if (isArray(attr)) {
      return getAttributes(el, attr)
    } else {
      setAttributes(el, attr)
    }
  }
}

export default attr
