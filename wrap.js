import isFunction from './utils/types/isFunction'
import isString from './utils/types/isString'
import isHTML from './utils/types/isHTML'
import isElement from './isElement'
import isCollection from './isCollection'
import getEl from './getEl'
import build from './build'
import clone from './clone'
import replace from './replace'

/**
 * 给 NodeList 中的每个 DOM 节点包裹上指定 HTML 标签
 * ========================================================================
 * @method wrap
 * @since 1.1.0
 * @param {HTMLCollection|NodeList} collection
 * @param {String|HTMLElement|Function} wrapElement
 */
const wrap = (collection, wrapElement) => {
  let $collection = []
  let $temp
  let strHTML
  let $return

  /* istanbul ignore else */
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
    if (isHTML(wrapElement)) {
      // HTML 字符串
      strHTML = build(wrapElement).outerHTML
    } else if (isString(wrapElement) && isElement(getEl(wrapElement))) {
      // DOM 元素的选择器
      strHTML = clone(getEl(wrapElement), true).outerHTML
    } else if (isElement(wrapElement)) {
      // DOM 元素
      strHTML = clone(wrapElement, true).outerHTML
    } else {
      $return = wrapElement($node, i)
      // Function 返回 DOM 元素
      if (isElement($return)) {
        strHTML = clone($return, true).outerHTML
      } else {
        // Function 返回（HTML）字符串
        strHTML = build(wrapElement($node, i)).outerHTML
      }
    }

    strHTML = strHTML.replace(
      />(?:\s*)<\//,
      `>${clone($node, true).outerHTML}</`
    )
    $temp = build(strHTML)

    /* istanbul ignore else */
    if ($temp) {
      replace($temp, $node)
    }
  })
}

export default wrap
