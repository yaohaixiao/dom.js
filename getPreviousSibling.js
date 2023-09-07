import isElement from './utils/types/isElement'

const getPreviousSibling = (el) => {
  return isElement(el) ? el.previousElementSibling : null
}

export default getPreviousSibling
