import getViewportHeight from './getViewportHeight'

/**
 * 获取当前页面（滚动条）的高度
 * ========================================================================
 * @method getDocumentHeight
 * @return {Number}
 */
const getDocumentHeight = () => {
  const scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight
  return Math.max(scrollHeight, getViewportHeight())
}

export default getDocumentHeight
