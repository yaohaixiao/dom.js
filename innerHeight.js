import isElement from './utils/types/isElement'
import isUndefined from './utils/types/isUndefined'
import isFunction from './utils/types/isFunction'
import pixel from './utils/pixel'
import getElementSizes from './getElementSizes'
import setStyle from './setStyle'

/**
 * 获取或设置 DOM 元素的 innerHeight 值；
 * innerHeight = style.height + padding 高度（paddingTop + paddingBottom）
 * ========================================================================
 * @method innerHeight
 * @param {HTMLElement} el
 * @param {Number|Function} [val]
 * @return {number|string|number|*|boolean}
 */
const innerHeight = (el, val) => {
  let height

  if (!isElement(el)) {
    return false
  }

  const {
    borderTopHeight,
    borderBottomHeight,
    paddingTopHeight,
    paddingBottomHeight,
    offsetHeight
  } = getElementSizes(el)

  if (isFunction(val)) {
    return val(el, {
      borderTopHeight,
      borderBottomHeight,
      paddingTopHeight,
      paddingBottomHeight,
      offsetHeight
    })
  }

  if (!isUndefined(val)) {
    height = offsetHeight - (borderTopHeight + borderBottomHeight)

    if (height !== val) {
      setStyle(
        el,
        'height',
        pixel(val - (paddingTopHeight + paddingBottomHeight))
      )
    }
  } else {
    return offsetHeight - (borderTopHeight + borderBottomHeight)
  }
}

export default innerHeight
