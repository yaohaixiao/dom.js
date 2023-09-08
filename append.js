import isElement from './utils/types/isElement'
import isTextNode from './utils/types/isTextNode'
import isFragment from './utils/types/isFragment'

const append = (el, reference) => {
  if (
    (!isElement(el) && !isTextNode(el) && !isFragment(el)) ||
    isElement(reference)
  ) {
    return false
  }

  reference.appendChild(el)
}

export default append
