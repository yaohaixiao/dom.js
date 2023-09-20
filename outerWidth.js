import isElement from './utils/types/isElement'
import isUndefined from './utils/types/isUndefined'
import isFunction from './utils/types/isFunction'
import pixel from './utils/pixel'
import _getElementSizes from './_getElementSizes'
import setStyle from './setStyle'

/**
 * 获取 DOM 元素的 outerWidth 值
 * ========================================================================
 * @method outerWidth
 * @param {HTMLElement} el
 * @param {Number|String|Function} [val]
 * @param {Boolean} includeMargin
 * @return {number|*|boolean}
 */
const outerWidth = (el, val, includeMargin = false) => {
  let width

  if (!isElement(el)) {
    return false
  }

  const {
    marginLeftWidth,
    marginRightWidth,
    borderLeftWidth,
    borderRightWidth,
    paddingLeftWidth,
    paddingRightWidth,
    offsetWidth
  } = _getElementSizes(el)

  if (isFunction(val)) {
    return val(el, {
      marginLeftWidth,
      marginRightWidth,
      borderLeftWidth,
      borderRightWidth,
      paddingLeftWidth,
      paddingRightWidth,
      offsetWidth
    })
  }

  if (!isUndefined(val)) {
    width = offsetWidth

    if (includeMargin) {
      width += marginLeftWidth + marginRightWidth
    }

    if (width !== val) {
      width =
        val -
        (borderLeftWidth +
          borderRightWidth +
          paddingLeftWidth +
          paddingRightWidth)

      if (includeMargin) {
        width -= marginLeftWidth + marginRightWidth
      }

      setStyle(el, 'width', pixel(width))
    }
  } else {
    width = offsetWidth

    if (includeMargin) {
      width -= marginLeftWidth + marginRightWidth
    }

    return width
  }
}

export default outerWidth
