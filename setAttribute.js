import isElement from './utils/types/isElement'

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
      if(el.style.cssText) {
        el.style.cssText = value
      } else {
        el.setAttribute(attr, value)
      }
      break
    case 'value':
      if (tagName === 'input' || tagName === 'textarea') {
        el.value = value
      } else {
        el.setAttribute(attr, value)
      }
      break
    default:
      el.setAttribute(attr, value)
      break
  }
}

export default setAttribute
