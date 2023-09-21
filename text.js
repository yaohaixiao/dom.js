import isElement from './utils/types/isElement'
import isString from './utils/types/isString'

/**
 * 获取或者设置 DOM 元素的 innerText 属性值，或者通过字符串，创建 TextNode 元素
 * ========================================================================
 * @method text
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/textContent
 * @param {HTMLElement|String} el
 * @param {String} [str]
 * @return {*|Text}
 */
const text = (el, str) => {
  if (isString(el)) {
    return document.createTextNode(el)
  } else if (isElement(el)) {
    if (str) {
      el.textContent  = str
    } else {
      return el.textContent
    }
  }
}

export default text
