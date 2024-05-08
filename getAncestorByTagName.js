import isString from './utils/types/isString'
import isElement from './isElement'
import parent from './parent'
import getTagName from './getTagName'
import getAncestorBy from './getAncestorBy'

/**
 * @method getAncestorByTagName
 * @since 1.10.0
 * @param {HTMLElement} el
 * @param {String} tagName
 * @return {HTMLElement|null}
 */
const getAncestorByTagName = (el, tagName) => {
  let $ancestor = null
  let filter

  if (!isString(tagName) || !isElement(el)) {
    return $ancestor
  }

  $ancestor = parent(el)

  if (!$ancestor) {
    return null
  }

  filter = (el) => {
    const tag = getTagName(el)

    return tag && tag.toUpperCase() === tagName.toUpperCase()
  }

  return getAncestorBy($ancestor, filter)
}

export default getAncestorByTagName
