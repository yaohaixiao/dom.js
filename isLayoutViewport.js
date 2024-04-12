/**
 * 判断当前视图是否为布局视图
 * ========================================================================
 * @method isLayoutViewport
 * @since 1.7.0
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Layout_viewport
 * @see https://stackoverflow.com/questions/7344886/visual-viewport-vs-layout-viewport-on-mobile-devices
 * @see https://www.quirksmode.org/mobile/viewports2.html
 * @return {boolean}
 */
const isLayoutViewport = () => {
  return document.documentElement.clientWidth === window.innerWidth
}

export default isLayoutViewport
