import isElement from './utils/isElement'

const getNextSibling = (el) => {
  return isElement(el) ? el.nextElementSibling : null
}

export default getNextSibling
