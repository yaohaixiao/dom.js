import isElement from './isElement'
import isLayoutViewport from './isLayoutViewport'
import getVisualViewport from './getVisualViewport'

/**
 * 获取 DOM 元素的 getBoundingClientRect 数据
 * ========================================================================
 * @method getBoundingClientRect
 * @since 1.7.0
 * @see https://github.com/floating-ui/floating-ui
 * @param {HTMLElement} el
 * @param {Boolean} [includeScale]
 * @param {Boolean} [isFixedStrategy]
 * @return {Object}
 */
const getBoundingClientRect = (
  el,
  includeScale = false,
  isFixedStrategy = false
) => {
  const round = Math.round
  const clientRect = el.getBoundingClientRect()
  const visualViewport = getVisualViewport(el)
  const addVisualOffsets = !isLayoutViewport() && isFixedStrategy

  let scaleX = 1
  let scaleY = 1

  if (includeScale && isElement(el)) {
    let offsetWidth = el.offsetWidth
    let offsetHeight = el.offsetHeight

    scaleX = offsetWidth > 0 ? round(clientRect.width) / offsetWidth || 1 : 1
    scaleY = offsetHeight > 0 ? round(clientRect.height) / offsetHeight || 1 : 1
  }

  const x =
    (clientRect.left +
      (addVisualOffsets ? visualViewport?.offsetLeft ?? 0 : 0)) /
    scaleX
  const y =
    (clientRect.top + (addVisualOffsets ? visualViewport?.offsetTop ?? 0 : 0)) /
    scaleY
  const width = clientRect.width / scaleX
  const height = clientRect.height / scaleY

  return {
    width,
    height,
    top: y,
    right: x + width,
    bottom: y + height,
    left: x,
    x,
    y
  }
}

export default getBoundingClientRect
