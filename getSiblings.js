import isElement from './isElement'
import isText from './isText'
import getPreviousSiblings from './getPreviousSiblings'
import getNextSiblings from './getNextSiblings'

/**
 * 获取 DOM 元素的前面或后面所有邻居元素节点。
 * ========================================================================
 * @method getSiblings
 * @param {HTMLElement|Text} el
 * @param {Boolean} [includeSelf]
 * @param {Boolean} [isElementSibling]
 * @return {Array}
 */
const getSiblings = (el, includeSelf = false, isElementSibling = true) => {
  let list = []
  let prev = []
  let next = []

  if (!isElement(el) && !isText(el)) {
    return list
  }

  prev = getPreviousSiblings(el, isElementSibling)
  list.push(...prev)

  /* istanbul ignore else */
  if (includeSelf) {
    list.push(el)
  }

  next = getNextSiblings(el, isElementSibling)
  list.push(...next)

  return list
}

export default getSiblings
