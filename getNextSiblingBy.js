import isElement from './utils/types/isElement'
import isMatched from './isMatched'
import getNextSibling from './getNextSibling'

const getNextSiblingBy = (el, filter) => {
  let $el = isElement(el) ? el : null

  while ($el) {
    $el = getNextSibling($el)

    if (isMatched($el, filter)) {
      return $el
    }
  }

  return null
}

export default getNextSiblingBy
