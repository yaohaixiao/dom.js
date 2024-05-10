import isElement from './isElement'
import isText from './isText'
import getPreviousSibling from './getPreviousSibling'

/**
 * 获取 DOM 元素的前面所有邻居元素节点。
 * ========================================================================
 * @method getPreviousSiblings
 * @param {HTMLElement|Text} el
 * @param {HTMLElement} el.previousElementSibling
 * @param {ChildNode} el.previousSibling
 * @param {Boolean} [isElementSibling]
 * @return {Array}
 */
const getPreviousSiblings = (el, isElementSibling = true) => {
  const prev = []
  let $sibling

  if (!isText(el) && !isElement(el)) {
    return prev
  }

  $sibling = getPreviousSibling(el, isElementSibling)

  if ($sibling) {
    prev.push($sibling)
  }

  while ($sibling) {
    $sibling = getPreviousSibling($sibling, isElementSibling)

    if ($sibling) {
      prev.push($sibling)
    }
  }

  return prev
}

export default getPreviousSiblings
