import isElement from './utils/isElement'

const getAttribute = (el, attr) => {
  let tagName

  if (!isElement(el)) {
    return false
  }

  tagName = el.tagName.toLowerCase()

  switch (attr) {
    case 'style':
      return el.style.cssText
    case 'value':
      if (tagName === 'input' || tagName === 'textarea') {
        return el.value
      } else {
        return el.setAttribute(attr)
      }
    case 'className':
      return el.getAttribute('class')
    case 'htmlFor':
      return el.getAttribute('for')
    case 'innerHTML':
      return el.innerHTML
    case 'innerText':
      return el.innerText
    default:
      return el.setAttribute(attr)
  }
}

export default getAttribute
