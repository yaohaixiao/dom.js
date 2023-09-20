import isElement from './utils/types/isElement'
import isUndefined from './utils/types/isUndefined'
import isFunction from './utils/types/isFunction'
import pixel from './utils/pixel'
import _getElementSizes from './_getElementSizes'
import setStyle from './setStyle'

/**
 * 获取或设置 DOM 元素的 innerHeight 值；
 * innerHeight = style.height + padding 高度（paddingTop + paddingBottom）
 * ========================================================================
 * @method innerHeight
 * @param {HTMLElement} el
 * @param {Number|Function} [val]
 * @return {number|*|boolean}
 */
const innerWidth = (el, val) => {
  let width

  if (!isElement(el)) {
    return false
  }

  const {
    borderLeftWidth,
    borderRightWidth,
    paddingLeftWidth,
    paddingRightWidth,
    offsetWidth
  } = _getElementSizes(el)

  if (isFunction(val)) {
    return val(el, {
      borderLeftWidth,
      borderRightWidth,
      paddingLeftWidth,
      paddingRightWidth,
      offsetWidth
    })
  }

  if (!isUndefined(val)) {
    width = offsetWidth - (borderLeftWidth + borderRightWidth)

    if (width !== val) {
      setStyle(el, 'width', pixel(val - (paddingLeftWidth + paddingRightWidth)))
    }
  } else {
    return offsetWidth - (borderLeftWidth + borderRightWidth)
  }
}

export default innerWidth
