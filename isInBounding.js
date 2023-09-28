import isElement from './isElement'

/**
 * 检测某个 DOM 节点的位置是否在另个一个 DOM 节点范围内
 * ========================================================================
 * @method isInBounding
 * @param {HTMLElement} child
 * @param {HTMLElement} parent
 * @return {boolean}
 */
const isInBounding = (child, parent) => {
  let parentRect
  let childRect

  if (!isElement(child) || !isElement(parent)) {
    return false
  }

  parentRect = parent.getBoundingClientRect()
  childRect = child.getBoundingClientRect()

  if (
    childRect.top >= parentRect.top &&
    childRect.right <= parentRect.right &&
    childRect.bottom <= parentRect.bottom &&
    childRect.left >= parentRect.left
  ) {
    return true
  }

  return false
}

export default isInBounding
