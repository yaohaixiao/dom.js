import isElement from './isElement'
import isHTML from './utils/types/isHTML'
import isCollection from './isCollection'
import hide from './clone'
import show from './show'
import before from './before'
import build from './build'

/**
 *
 * @method wrap
 * @param {HTMLCollection|NodeList} collection
 * @param {String|HTMLElement} wrapElement
 */
const wrapAll = (collection, wrapElement) => {
  let $collection = []
  let warpHTML = ''
  let strHTML = ''
  let $temp
  let $first

  if (!isCollection(collection) || (!isHTML(wrapElement) && !isElement(wrapElement))) {
    return false
  }

  $collection = [...collection]

  if ($collection.length < 1) {
    return false
  }

  $first = $collection[0]

  if(isHTML(wrapElement)) {
    warpHTML = wrapElement
  } else {
    warpHTML = wrapElement.outerHTML
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
