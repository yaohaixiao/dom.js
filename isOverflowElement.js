import isElement from './isElement'
import getStyles from './getStyles'

/**
 * 判断 DOM 元素是否设置了 overflow 属性
 * ========================================================================
 * @method isOverflowElement
 * @since 1.7.0
 * @see https://github.com/floating-ui/floating-ui
 * @param {HTMLElement} el
 * @return {boolean}
 */
const isOverflowElement = (el) => {
  if (!isElement(el)) {
    return false
  }

  const { overflow, overflowX, overflowY } = getStyles(el)

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX)
}

export default isOverflowElement
