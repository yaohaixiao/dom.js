import isElement from './utils/isElement'
import isString from './utils/isString'
import isObject from './utils/isObject'
import setAttribute from './setAttribute'
import setAttributes from './setAttributes'
import getAttribute from './getAttribute'

const attr = (el, attr, value) => {
  if (!isElement(el)) {
    return false
  }

  if (isString(attr)) {
    if (typeof value !== 'undefined') {
      setAttribute(el, attr, value)
    } else {
      getAttribute(el, attr)
    }
  } else if (isObject(attr)) {
    setAttributes(el, attr)
  }
}

export default attr
