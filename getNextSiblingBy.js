import isElement from './utils/isElement'
import isMatched from './isMatched'
import getNextSibling from './getNextSibling'

const getNextSiblingBy = (el, match) => {
  let $el = isElement(el) ? el : null

  while ($el) {
    $el = getNextSibling($el)

    if (isMatched($el, match)) {
      return $el
    }
  }

  return null
}

export default getNextSiblingBy
