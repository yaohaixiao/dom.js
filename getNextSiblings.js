import isElement from './utils/types/isElement'
import getNextSibling from './getNextSibling'

/**
 * 获取 DOM 元素的后面所有邻居元素节点。
 * ========================================================================
 * @method getNextSiblings
 * @param {HTMLElement} el
 * @return {Array}
 */
const getNextSiblings = (el) => {
  const next = []
  let $sibling

  if (!isElement(el)) {
    return next
  }

  $sibling = getNextSibling(el)

  if ($sibling) {
    next.push($sibling)
  }

  while ($sibling) {
    $sibling = getNextSibling($sibling)

    if ($sibling) {
      next.push($sibling)
    }
  }

  return next
}

export default getNextSiblings
