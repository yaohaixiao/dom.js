import isHTML from './utils/types/isHTML'
import isElement from './utils/types/isElement'
import createElement from './createElement'

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
