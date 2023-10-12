import isElement from './isElement'
import getViewportHeight from './getViewportHeight'
import getViewportWidth from './getViewportWidth'

/**
 * 检测 DOM 元素是否在当前视口内可见
 * ========================================================================
 * @method inViewport
 * @param {HTMLElement} el
 * @return {Boolean}
 */
const inViewport = (el) => {
  let rect
  let vh
  let vw

  if (!isElement(el)) {
    return false
  }

  rect = el.getBoundingClientRect()
  vh = getViewportHeight()
  vw = getViewportWidth()

  return (
    rect.top >= 0 && rect.left >= 0 && rect.bottom <= vh && rect.right <= vw
  )
}

export default inViewport
