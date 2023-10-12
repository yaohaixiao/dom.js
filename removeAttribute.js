import isString from './utils/types/isString'
import isElement from './isElement'

/**
 * 移除 DOM 元素的 DOM 属性值
 * ========================================================================
 * @method removeAttribute
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/removeAttribute
 * @param {HTMLElement} el
 * @param {String} attr
 */
const removeAttribute = (el, attr) => {
  let tagName

  if (!isElement(el) || !isString(attr)) {
    return false
  }

  tagName = el.tagName.toLowerCase()

  switch (attr) {
    case 'className':
      el.removeAttribute('class')
      break
    case 'htmlFor':
      el.removeAttribute('for')
      break
    case 'value':
      if (tagName === 'input' || tagName === 'textarea') {
        el.value = ''
      } else {
        el.removeAttribute(attr)
      }
      break
    default:
      el.removeAttribute(attr)
      break
  }
}

export default removeAttribute
