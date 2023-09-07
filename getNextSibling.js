import isElement from './utils/types/isElement'

const getNextSibling = (el) => {
  return isElement(el) ? el.nextElementSibling : null
}

export default getNextSibling
