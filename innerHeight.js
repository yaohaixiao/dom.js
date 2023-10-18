import isUndefined from './utils/types/isUndefined'
import isFunction from './utils/types/isFunction'
import pixel from './pixel'
import isElement from './isElement'
import _getElementSizes from './_getElementSizes'
import setStyle from './setStyle'

/**
 * 获取或设置 DOM 元素的 innerHeight 值；
 * innerHeight = style.height + padding 高度（paddingTop + paddingBottom）
 * ========================================================================
 * @method innerHeight
 * @param {HTMLElement} el
 * @param {Number|Function} [val]
 * @return {Number|*}
 */
const innerHeight = (el, val) => {
  let height

  if (!isElement(el)) {
    return false
  }

  const { borderTop, borderBottom, paddingTop, paddingBottom, offsetHeight } =
    _getElementSizes(el)

  if (isFunction(val)) {
    return val(el, {
      borderTop,
      borderBottom,
      paddingTop,
      paddingBottom,
      offsetHeight
    })
  }

  if (!isUndefined(val)) {
    height = offsetHeight - (borderTop + borderBottom)

    /* istanbul ignore else */
    if (height !== val) {
      setStyle(el, 'height', pixel(val - (paddingTop + paddingBottom)))
    }
  } else {
    return offsetHeight - (borderTop + borderBottom)
  }
}

export default innerHeight
