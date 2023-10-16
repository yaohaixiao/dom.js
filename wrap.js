import isFunction from './utils/types/isFunction'
import isHTML from './utils/types/isHTML'
import isElement from './isElement'
import isCollection from './isCollection'
import build from './build'
import clone from './clone'
import replace from './replace'

/**
 *
 * @method wrap
 * @param {HTMLCollection|NodeList} collection
 * @param {String|HTMLElement|Function} wrapElement
 */
const wrap = (collection, wrapElement) => {
  let $collection = []
  let $temp
  let strHTML

  if (
    !isCollection(collection) ||
    (!isHTML(wrapElement) &&
      !isElement(wrapElement) &&
      !isFunction(wrapElement))
  ) {
    return false
  }

  $collection = [...collection]

  if ($collection.length < 1) {
    return false
  }

  $collection.forEach(($node, i) => {
    if (!isElement($node)) {
      return false
    }

    if (isHTML(wrapElement)) {
      strHTML = build(wrapElement).outerHTML
    } else if (isElement(wrapElement)) {
      strHTML = clone(wrapElement, true).outerHTML
    } else {
      if (isElement(wrapElement($node))) {
        strHTML = wrapElement($node).outerHTML
      } else {
        strHTML = build(wrapElement($node, i)).outerHTML
      }
    }

    strHTML = strHTML.replace(/>(?:\s*)<\//, `>${clone($node, true).outerHTML}</`)
    $temp = build(strHTML)

    if ($temp) {
      replace($temp, $node)
    }
  })
}

export default wrap
