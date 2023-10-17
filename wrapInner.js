import isFunction from './utils/types/isFunction'
import isString from './utils/types/isString'
import isHTML from './utils/types/isHTML'
import isElement from './isElement'
import isCollection from './isCollection'
import build from './build'
import clone from './clone'
import getEl from './getEl'

/**
 * 给 NodeList 中的每个 DOM 节点内部包裹上指定 HTML 标签
 * ========================================================================
 * @method wrapInner
 * @since 1.1.0
 * @param {HTMLCollection|NodeList} collection
 * @param {String|HTMLElement|Function} wrapElement
 */
const wrapInner = (collection, wrapElement) => {
  let $collection = []
  let strHTML = ''
  let wrapHTML = ''

  if (
    !isCollection(collection) ||
    (!isHTML(wrapElement) &&
      !isString(wrapElement) &&
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

    strHTML = $node.innerHTML

    // HTML 字符串
    if (isHTML(wrapElement)) {
      wrapHTML = build(wrapElement).outerHTML
    } else if (isElement(getEl(wrapElement))) {
      // DOM 元素选择器
      wrapHTML = clone(getEl(wrapElement), true).outerHTML
    } else if (isElement(wrapElement)) {
      // DOM 元素
      wrapHTML = clone(wrapElement, true).outerHTML
    } else {
      // Function 返回 DOM 元素
      if (isElement(wrapElement($node))) {
        strHTML = wrapElement($node).outerHTML
      } else {
        // Function 返回（HTML）字符串
        strHTML = build(wrapElement($node, i)).innerHTML
      }
    }

    strHTML = wrapHTML.replace(/>(?:\s*)<\//, `>${strHTML}</`)
    $node.innerHTML = strHTML
  })
}

export default wrapInner
