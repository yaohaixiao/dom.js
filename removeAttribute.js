import isElement from './utils/types/isElement'

const removeAttribute = (el, attr) => {
  let tagName

  if (!isElement(el)) {
    return false
  }

  tagName = el.tagName.toLowerCase()

  switch (attr) {
    case 'className':
      el.removeAttribute('class')
      break
    case 'htmlFor':
      el.removeAttribute('for')
      break
    case 'value':
      if (tagName === 'input' || tagName === 'textarea') {
        el.value = ''
      } else {
        el.removeAttribute(attr)
      }
      break
    default:
      el.removeAttribute(attr)
      break
  }
}

export default removeAttribute
