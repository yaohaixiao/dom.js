import isHTML from './utils/types/isHTML'
import isElement from './utils/types/isElement'
import createElement from './createElement'

/**
 * 获取或者设置 DOM 元素的 innerHTML 属性值，或者通过 HTML 字符串，创建 DOM 元素
 * ========================================================================
 * @method html
 * @param {HTMLElement|String} el
 * @param {String} [strHTML]
 * @return {DocumentFragment|*}
 */
const html = (el, strHTML) => {
  const $fragment = document.createDocumentFragment()

  if (isHTML(el)) {
    const children = createElement('div', {
      innerHTML: strHTML
    }).childNodes

    children.forEach((child) => {
      return $fragment.appendChild(child)
    })
    return $fragment
  } else if (isElement(el)) {
    if (strHTML) {
      el.innerHTML = strHTML
    } else {
      return el.innerHTML
    }
  }
}

export default html
