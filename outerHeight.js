import isElement from './utils/types/isElement'
import isUndefined from './utils/types/isUndefined'
import isFunction from './utils/types/isFunction'
import pixel from './utils/pixel'
import _getElementSizes from './_getElementSizes'
import setStyle from './setStyle'

/**
 * 获取 DOM 元素的 outerHeight 值
 * ========================================================================
 * @method outerHeight
 * @param {HTMLElement} el
 * @param {Number|String|Function} [val]
 * @param {Boolean} includeMargin
 * @return {number|*|boolean}
 */
const outerHeight = (el, val, includeMargin = false) => {
  let height

  if (!isElement(el)) {
    return false
  }

  const {
    marginTopHeight,
    marginBottomHeight,
    borderTopHeight,
    borderBottomHeight,
    paddingTopHeight,
    paddingBottomHeight,
    offsetHeight
  } = _getElementSizes(el)

  if (isFunction(val)) {
    return val(el, {
      marginTopHeight,
      marginBottomHeight,
      borderTopHeight,
      borderBottomHeight,
      paddingTopHeight,
      paddingBottomHeight,
      offsetHeight
    })
  }

  if (!isUndefined(val)) {
    height = offsetHeight

    if (includeMargin) {
      height += marginTopHeight + marginBottomHeight
    }

    if (height !== val) {
      height =
        val -
        (borderTopHeight +
          borderBottomHeight +
          paddingTopHeight +
          paddingBottomHeight)

      if (includeMargin) {
        height -= marginTopHeight + marginBottomHeight
      }

      setStyle(el, 'height', pixel(height))
    }
  } else {
    height = offsetHeight

    if (includeMargin) {
      height += marginTopHeight + marginBottomHeight
    }

    return height
  }
}

export default outerHeight
