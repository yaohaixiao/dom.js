import getBoundingClientRect from './getBoundingClientRect'
import isElement from './isElement'

/**
 * 检测 DOM 元素是否被缩放了
 * ========================================================================
 * @method isScaled
 * @since 1.9.0
 * @see https://github.com/floating-ui/floating-ui
 * @param el
 * @return {boolean}
 */
const isScaled = (el) => {
  const round = Math.round

  if (!isElement(el)) {
    return false
  }

  const rect = getBoundingClientRect(el)

  return (
    round(rect.width) !== el.offsetWidth ||
    round(rect.height) !== el.offsetHeight
  )
}

export default isScaled
