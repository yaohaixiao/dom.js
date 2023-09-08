import isElement from './utils/types/isElement'
import isTextNode from './utils/types/isTextNode'
import isFragment from './utils/types/isFragment'
import insertBefore from './insertBefore'

const prepend = (el, reference) => {
  let $firstChild

  if (
    (!isElement(el) && !isTextNode(el) && !isFragment(el)) ||
    isElement(reference)
  ) {
    return false
  }

  $firstChild = reference.firstChild
  insertBefore(el, $firstChild)
}

export default prepend
