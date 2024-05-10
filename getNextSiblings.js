import isElement from './isElement'
import isText from './isText'
import getNextSibling from './getNextSibling'

/**
 * 获取 DOM 元素的后面所有邻居元素节点。
 * ========================================================================
 * @method getNextSiblings
 * @param {HTMLElement|Text} el
 * @param {HTMLElement} el.previousElementSibling
 * @param {ChildNode} el.previousSibling
 * @param {Boolean} [isElementSibling]
 * @return {Array}
 */
const getNextSiblings = (el, isElementSibling = true) => {
  const next = []
  let $sibling

  if (!isText(el) && !isElement(el)) {
    return next
  }

  $sibling = getNextSibling(el, isElementSibling)

  if ($sibling) {
    next.push($sibling)
  }

  while ($sibling) {
    $sibling = getNextSibling($sibling, isElementSibling)

    if ($sibling) {
      next.push($sibling)
    }
  }

  return next
}

export default getNextSiblings
