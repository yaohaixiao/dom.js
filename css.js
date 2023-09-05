import isElement from './utils/isElement'
import isString from './utils/isString'
import setStyle from './setStyle'
import getStyle from './getStyle'
import isObject from './utils/isObject'
import addStyles from './addStyles'

const css = (el, attr, value) => {
  if(!isElement(el)) {
    return false
  }

  if(isString(attr)) {
    if(typeof value !== 'undefined') {
      setStyle(el, attr, value)
    } else {
      getStyle(el, attr)
    }
  } else if(isObject(attr)) {
    addStyles(el, attr)
  }
}

export default css
