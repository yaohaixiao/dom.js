import isElement from './utils/types/isElement'
import isString from './utils/types/isString'
import isObject from './utils/types/isObject'
import isArray from './utils/types/isArray'
import setAttribute from './setAttribute'
import setAttributes from './setAttributes'
import getAttribute from './getAttribute'
import getAttributes from './getAttributes'
import isUndefined from './utils/types/isUndefined'

/**
 * 获取或者设置 DOM 节点的单个或者多个 DOM 属性
 * ========================================================================
 * @method attr
 * @see getAttribute
 * @see getAttributes
 * @see setAttribute
 * @set setAttributes
 * @param el
 * @param attr
 * @param value
 * @return {boolean|*|{}}
 */
const attr = (el, attr, value) => {
  if (!isElement(el)) {
    return false
  }

  if (!attr && !value) {
    return getAttributes(el)
  }

  if (isString(attr)) {
    if (!isUndefined(value)) {
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
