import isHTML from './utils/types/isHTML'
import isElement from './utils/types/isElement'
import createElement from './createElement'

/**
 * 获取或者设置 DOM 元素的 innerHTML 属性值，或者通过 HTML 字符串，创建 DOM 元素
 * ========================================================================
 * @method html
 * @param {HTMLElement|String} el
 * @param {String} [strHTML]
 * @return {DocumentFragment|*|null}
 */
const html = (el, strHTML) => {
  const $fragment = document.createDocumentFragment()

  if (!el) {
    return null
  }

  if (isHTML(el)) {
    const template = createElement('div')
    let children = []

    template.innerHTML = el
    children = [...template.childNodes]
    children.forEach((child) => {
      $fragment.appendChild(child)
    })

    return $fragment
  } else {
    /* istanbul ignore else */
    if (isElement(el)) {
      if (strHTML) {
        el.innerHTML = strHTML
      } else {
        return el.innerHTML
      }
    }
  }
}

export default html
