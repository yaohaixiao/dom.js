import parent from './parent'
import isMatched from './isMatched'

/**
 * @method getAncestorBy
 * @since 1.10.0
 * @param {HTMLElement} el
 * @param {Function} filter
 * @return {HTMLElement|null}
 */
const getAncestorBy = (el, filter) => {
  let $ancestor = parent(el)

  while ($ancestor) {
    if (isMatched($ancestor, filter)) {
      return $ancestor
    }

    $ancestor = parent($ancestor)
  }

  return null
}

export default getAncestorBy
