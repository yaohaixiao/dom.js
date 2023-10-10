import isElement from './isElement'
import getViewportHeight from './getViewportHeight'
import getViewportWidth from './getViewportWidth'

/**
 * ========================================================================
 * @method inViewport
 * @param el
 * @return {boolean}
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
