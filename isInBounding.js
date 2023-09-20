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
  let pRect
  let cRect

  if(!isElement(child) || !isElement(parent)){
    return false
  }

  pRect = parent.getBoundingClientRect();
  cRect = child.getBoundingClientRect();

  if (
    cRect.top >= pRect.top &&
    cRect.right <= pRect.right &&
    cRect.bottom <= pRect.bottom &&
    cRect.left >= pRect.left) {
    return true
  }

  return false
}

export default isInBounding
