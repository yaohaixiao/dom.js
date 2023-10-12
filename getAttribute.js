import isElement from './isElement'
import isString from './utils/types/isString'

/**
 * 获取 DOM 元素的某个 HTML 属性的值
 * ========================================================================
 * @method getAttribute
 * @param {HTMLElement} el
 * @param {String} attr
 * @return {String|Boolean}
 */
const getAttribute = (el, attr) => {
  let tagName

  if (!isElement(el) || !isString(attr)) {
    return false
  }

  tagName = el.tagName.toLowerCase()

  switch (attr) {
    case 'className':
      return el.getAttribute('class')
    case 'htmlFor':
      return el.getAttribute('for')
    case 'style':
      return el.style.cssText
    case 'value':
      if (tagName === 'input' || tagName === 'textarea') {
        return el.value
      } else {
        return el.getAttribute(attr)
      }
    default:
      return el.getAttribute(attr)
  }
}

export default getAttribute
