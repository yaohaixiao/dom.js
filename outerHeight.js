import isUndefined from './utils/types/isUndefined'
import isFunction from './utils/types/isFunction'
import isBoolean from './utils/types/isBoolean'
import pixel from './utils/pixel'
import isElement from './isElement'
import _getElementSizes from './_getElementSizes'
import setStyle from './setStyle'

/**
 * 获取 DOM 元素的 outerHeight 值
 * ========================================================================
 * @method outerHeight
 * @param {HTMLElement} el
 * @param {Number|String|Function|Boolean} [val]
 * @param {Boolean} [includeMargin]
 * @return {number|*|boolean}
 */
const outerHeight = (el, val, includeMargin = false) => {
  let height

  if (!isElement(el)) {
    return false
  }

  const {
    marginTop,
    marginBottom,
    borderTop,
    borderBottom,
    paddingTop,
    paddingBottom,
    offsetHeight
  } = _getElementSizes(el)

  // val 为 Function 类型，用来获取自定义的 outerHeight
  if (isFunction(val)) {
    return val(el, {
      marginTop,
      marginBottom,
      borderTop,
      borderBottom,
      paddingTop,
      paddingBottom,
      offsetHeight
    })
  }

  // 有设置 val 参数
  if (!isUndefined(val)) {
    height = offsetHeight

    // 获取 outerHeight，包含边距
    if (isBoolean(val)) {
      includeMargin = val

      /* istanbul ignore else */
      if (includeMargin) {
        height += marginTop + marginBottom
      }

      return height
    }

    /* istanbul ignore else */
    if (height !== val) {
      height = val - (borderTop + borderBottom + paddingTop + paddingBottom)

      // 设置 outerHeight，包含边距
      /* istanbul ignore else */
      if (includeMargin) {
        height -= marginTop + marginBottom
      }

      setStyle(el, 'height', pixel(height))
    }
  } else {
    return offsetHeight
  }
}

export default outerHeight
