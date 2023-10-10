/**
 * ========================================================================
 * @method getViewportWidth
 * @return {number}
 */
const getViewportWidth = () => {
  return Math.max(document.documentElement.clientWidth, window.innerWidth)
}

export default getViewportWidth
