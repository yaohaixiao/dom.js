import isString from './utils/types/isString'
import isElement from './isElement'

/**
 * 获取或者设置 DOM 元素的 innerText 属性值，或者通过字符串，创建 TextNode 元素
 * ========================================================================
 * @method text
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/textContent
 * @param {HTMLElement|String} el
 * @param {String} [str]
 * @return {Text|*}
 */
const text = (el, str) => {
  if (!el || (!isString(el) && !isElement(el))) {
    return false
  }

  if (isString(el)) {
    return document.createTextNode(el)
  } else if (isString(str)) {
    el.textContent = str
  } else {
    return el.textContent
  }
}

export default text
