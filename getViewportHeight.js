/**
 * ========================================================================
 * @method getViewportHeight
 * @return {Number}
 */
const getViewportHeight = () => {
  return Math.max(document.documentElement.clientHeight, window.innerHeight)
}

export default getViewportHeight
