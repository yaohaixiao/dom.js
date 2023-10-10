import isElement from './isElement'
import removeAttribute from './removeAttribute'

/**
 * 移除 DOM 元素的 DOM 属性值
 * ========================================================================
 * @method removeAttributes
 * @param el
 * @param attrs
 * @return {boolean}
 */
const removeAttributes = (el, attrs) => {
  let props = attrs

  if (!isElement(el)) {
    return false
  }

  if (!props) {
    props = el.getAttributeNames()
  }

  props.forEach((prop) => {
    removeAttribute(el, prop)
  })
}

export default removeAttributes
