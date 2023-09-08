import isElement from './utils/types/isElement'
import isMatched from './isMatched'
import getPreviousSibling from './getPreviousSibling'

const getPreviousSiblingBy = (el, filter) => {
  let $el = isElement(el) ? el : null

  while ($el) {
    $el = getPreviousSibling($el)

    if (isMatched($el, filter)) {
      return $el
    }
  }

  return null
}

export default getPreviousSiblingBy
