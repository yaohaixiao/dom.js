import isArray from './utils/types/isArray'
import isElement from './isElement'
import removeAttribute from './removeAttribute'

/**
 * 移除 DOM 元素的 DOM 属性值
 * ========================================================================
 * @method removeAttributes
 * @param {HTMLElement} el
 * @param {Array} attrs
 */
const removeAttributes = (el, attrs) => {
  let props = []

  if (!isElement(el) || isArray(attrs)) {
    return false
  }

  props = attrs

  if (!props) {
    props = el.getAttributeNames()
  }

  props.forEach((prop) => {
    removeAttribute(el, prop)
  })
}

export default removeAttributes
