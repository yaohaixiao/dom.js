import isElement from './utils/types/isElement'
import isUndefined from './utils/types/isUndefined'
import isFunction from './utils/types/isFunction'
import isBoolean from './utils/types/isBoolean'
import pixel from './utils/pixel'
import _getElementSizes from './_getElementSizes'
import setStyle from './setStyle'

/**
 * 获取 DOM 元素的 outerWidth 值
 * ========================================================================
 * @method outerWidth
 * @param {HTMLElement} el
 * @param {Number|String|Function|Boolean} [val]
 * @param {Boolean} [includeMargin]
 * @return {number|*|boolean}
 */
const outerWidth = (el, val, includeMargin = false) => {
  let width

  if (!isElement(el)) {
    return false
  }

  const {
    marginLeft,
    marginRight,
    borderLeft,
    borderRight,
    paddingLeft,
    paddingRight,
    offsetWidth
  } = _getElementSizes(el)

  // val 为 Function 类型，用来获取自定义的 outerWidth
  if (isFunction(val)) {
    return val(el, {
      marginLeft,
      marginRight,
      borderLeft,
      borderRight,
      paddingLeft,
      paddingRight,
      offsetWidth
    })
  }

  // 设置了 val 参数
  if (!isUndefined(val)) {
    width = offsetWidth

    // 获取 outerWidth，包含边距
    if (isBoolean(val)) {
      includeMargin = val

      if (includeMargin) {
        width += marginLeft + marginRight
      }

      return width
    }

    // 设置 outerWidth，包含边距
    if (includeMargin) {
      width += marginLeft + marginRight
    }

    if (width !== val) {
      width =
        val -
        (borderLeft +
          borderRight +
          paddingLeft +
          paddingRight)

      if (includeMargin) {
        width -= marginLeft + marginRight
      }

      setStyle(el, 'width', pixel(width))
    }
  } else {
    return offsetWidth
  }
}

export default outerWidth
