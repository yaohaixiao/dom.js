import isHTML from './utils/isHTML'
import isElement from './utils/isElement'
import createElement from './createElement'

const html = (el, str) => {
  const $fragment = document.createDocumentFragment()

  if (isHTML(el)) {
    const children = createElement('div', {
      innerHTML: str
    }).childNodes

    children.forEach((child) => {
      return $fragment.appendChild(child)
    })
    return $fragment
  } else if (isElement(el)) {
    if (str) {
      el.innerHTML = str
    } else {
      return el.innerHTML
    }
  }
}

export default html
