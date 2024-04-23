import getVisualViewport from './getVisualViewport'
import getDocument from './getDocument'
import isLayoutViewport from './isLayoutViewport'

/**
 * 获取 DOM 元素所在的文档的视口的尺寸
 * ========================================================================
 * @method getDocumentRect
 * @since 1.8.0
 * @param {HTMLElement} el
 * @param {String} strategy
 * @return {Object}
 */
const getViewportRect = (el, strategy) => {
  const html = getDocument(el)
  const visualViewport = getVisualViewport(el)

  let width = html.clientWidth
  let height = html.clientHeight
  let x = 0
  let y = 0

  if (visualViewport) {
    width = visualViewport.width
    height = visualViewport.height

    const layoutViewport = isLayoutViewport()

    if (layoutViewport || (!layoutViewport && strategy === 'fixed')) {
      x = visualViewport.offsetLeft
      y = visualViewport.offsetTop
    }
  }

  return {
    width,
    height,
    x,
    y
  }
}

export default getViewportRect
