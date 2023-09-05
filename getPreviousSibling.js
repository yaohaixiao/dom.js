import isElement from './utils/isElement'

const getPreviousSibling = (el) => {
  return isElement(el) ? el.previousElementSibling : null
}

export default getPreviousSibling
