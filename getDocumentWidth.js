import getViewportWidth from './getViewportWidth'

/**
 * ========================================================================
 * @method getDocumentWidth
 * @return {number}
 */
const getDocumentWidth = () => {
  const scrollWidth =
    document.documentElement.scrollWidth || document.body.scrollWidth
  return Math.max(scrollWidth, getViewportWidth())
}

export default getDocumentWidth
