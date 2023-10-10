import isElement from './isElement'
import getOffset from './getOffset'

/**
 * ========================================================================
 * @method offset
 * @alias getOffset
 * @param el
 * @return {{top: Number, left: Number, width: (*|number), height: number}|null}
 */
const offset = (el) => {
  if (!isElement(el)) {
    return null
  }

  return getOffset(el)
}

export default offset
