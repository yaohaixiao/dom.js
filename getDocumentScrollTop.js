/**
 * 获取当前文档（窗口）滚动条的纵向滚动的距离
 * ========================================================================
 * @method getDocumentScrollTop
 * @param {Document} [doc]
 * @return {number}
 */
const getDocumentScrollTop = (doc = document) => {
  const $document = doc
  return Math.max($document.documentElement.scrollTop, $document.body.scrollTop)
}

export default getDocumentScrollTop
