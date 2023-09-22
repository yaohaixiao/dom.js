import isElement from './utils/types/isElement'

const getAttribute = (el, attr) => {
  let tagName

  if (!isElement(el) || !attr) {
    return false
  }

  tagName = el.tagName.toLowerCase()

  switch (attr) {
    case 'className':
      return el.getAttribute('class')
    case 'htmlFor':
      return el.getAttribute('for')
    case 'style':
      return el.style.cssText
    case 'value':
      if (tagName === 'input' || tagName === 'textarea') {
        return el.value
      } else {
        return el.getAttribute(attr)
      }
    default:
      return el.getAttribute(attr)
  }
}

export default getAttribute
