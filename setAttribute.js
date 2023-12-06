import isElement from './isElement'
import { FROM_ELEMENT_TAGS } from './utils/enum'

/**
 * 给 DOM 节点设置属性/值
 * ========================================================================
 * @method setAttribute
 * @param {HTMLElement} el - DOM 节点
 * @param {String} attr - 属性名称
 * @param {String|Number|Boolean} value - 属性值
 */
const setAttribute = (el, attr, value) => {
  let tagName

  if (!isElement(el)) {
    return false
  }

  tagName = el.tagName.toLowerCase()

  switch (attr) {
    case 'className':
      el.className = value
      break
    case 'htmlFor':
      el.setAttribute('for', value)
      break
    case 'style':
      el.style.cssText = value
      break
    case 'value':
      if (FROM_ELEMENT_TAGS.indexOf(tagName) > -1) {
        el.value = value
      } else {
        el.setAttribute(attr, value)
      }
      break
    case 'innerText':
      el.innerText = value
      break
    case 'innerHTML':
      el.innerHTML = value
      break
    default:
      el.setAttribute(attr, value)
      break
  }
}

export default setAttribute
