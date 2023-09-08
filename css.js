import isElement from './utils/types/isElement'
import isString from './utils/types/isString'
import setStyle from './setStyle'
import getStyle from './getStyle'
import isObject from './utils/types/isObject'
import setStyles from './setStyles'
import isUndefined from './utils/types/isUndefined'

const css = (el, attr, value) => {
  if (!isElement(el)) {
    return false
  }

  if (isString(attr)) {
    if (!isUndefined(value)) {
      setStyle(el, attr, value)
    } else {
      getStyle(el, attr)
    }
  } else if (isObject(attr)) {
    setStyles(el, attr)
  }
}

export default css
