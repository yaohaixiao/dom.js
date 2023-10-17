import isElement from './isElement'
import isHTML from './utils/types/isHTML'
import isString from './utils/types/isString'
import isCollection from './isCollection'
import hide from './clone'
import show from './show'
import before from './before'
import build from './build'
import getEl from './getEl'
import clone from './clone'

/**
 * 给（以组邻近的）NodeList 包裹上指定的 HTML 标签
 * ========================================================================
 * @method wrap
 * @since 1.1.0
 * @param {HTMLCollection|NodeList} collection
 * @param {String|HTMLElement|Function} wrapElement
 */
const wrapAll = (collection, wrapElement) => {
  let $collection = []
  let warpHTML = ''
  let strHTML = ''
  let $temp
  let $first

  if (
    !isCollection(collection) ||
    (!isHTML(wrapElement) && !isString(wrapElement) && !isElement(wrapElement))
  ) {
    return false
  }

  $collection = [...collection]

  if ($collection.length < 1) {
    return false
  }

  $first = $collection[0]

  if (isHTML(wrapElement)) {
    warpHTML = wrapElement
  } else if (isElement(getEl(wrapElement))) {
    warpHTML = clone(getEl(wrapElement), true).outerHTML
  } else {
    warpHTML = clone(wrapElement, true).outerHTML
  }

  $temp = build(warpHTML)
  hide($temp)
  before($temp, $first)

  $collection.forEach(($node, i) => {
    if (!isElement($node)) {
      return false
    }

    strHTML += $node.outerHTML
    hide($node)
    $node.remove()
  })

  strHTML = warpHTML.replace(/>(?:\s*)<\//, `>${strHTML}</`)
  $temp.outerHTML = strHTML

  show($temp)
}

export default wrapAll
