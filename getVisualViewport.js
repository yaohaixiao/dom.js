import isElement from './isElement'
import getWindow from './getWindow'

/**
 * 获取（el元素所在窗口的）VisualViewport 对象
 * ========================================================================
 * @method getVisualViewport
 * @since 1.7.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/VisualViewport
 * @see https://www.quirksmode.org/mobile/viewports2.html
 * @param {HTMLElement} [el]
 * @return {VisualViewport}
 */
const getVisualViewport = (el) => {
  return isElement(el) ? getWindow(el).visualViewport : window.visualViewport
}

export default getVisualViewport
