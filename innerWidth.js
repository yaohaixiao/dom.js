import isElement from './utils/types/isElement'
import isUndefined from './utils/types/isUndefined'
import isFunction from './utils/types/isFunction'
import pixel from './utils/pixel'
import _getElementSizes from './_getElementSizes'
import setStyle from './setStyle'

/**
 * 获取或设置 DOM 元素的 innerWidth 值；
 * innerWidth = style.height + padding 宽度（paddingRight + paddingLeft）
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

  const { borderLeft, borderRight, paddingLeft, paddingRight, offsetWidth } =
    _getElementSizes(el)

  if (isFunction(val)) {
    return val(el, {
      borderLeft,
      borderRight,
      paddingLeft,
      paddingRight,
      offsetWidth
    })
  }

  if (!isUndefined(val)) {
    width = offsetWidth - (borderLeft + borderRight)

    if (width !== val) {
      setStyle(el, 'width', pixel(val - (paddingLeft + paddingRight)))
    }
  } else {
    return offsetWidth - (borderLeft + borderRight)
  }
}

export default innerWidth
