import isElement from './utils/isElement'
import isMatched from './isMatched'
import getPreviousSibling from './getPreviousSibling'

const getPreviousSiblingBy = (el, match) => {
  let $el = isElement(el) ? el : null

  while ($el) {
    $el = getPreviousSibling($el)

    if (isMatched($el, match)) {
      return $el
    }
  }

  return null
}

export default getPreviousSiblingBy
