import isElement from './isElement'
import getPreviousSiblings from './getPreviousSiblings'
import getNextSiblings from './getNextSiblings'

/**
 * 获取 DOM 元素的前面或后面所有邻居元素节点。
 * ========================================================================
 * @method getSiblings
 * @param {HTMLElement} el
 * @param {Boolean} [includeSelf]
 * @return {Array}
 */
const getSiblings = (el, includeSelf = false) => {
  let list = []
  let prev = []
  let next = []

  if (!isElement(el)) {
    return list
  }

  prev = getPreviousSiblings(el)
  list.push(...prev)

  /* istanbul ignore else */
  if (includeSelf) {
    list.push(el)
  }

  next = getNextSiblings(el)
  list.push(...next)

  return list
}

export default getSiblings
