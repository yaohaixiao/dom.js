/**
 * 获取当前文档（窗口）滚动条的横向滚动的距离
 * ========================================================================
 * @method getDocumentScrollLeft
 * @param {Document} [doc]
 * @return {number}
 */
const getDocumentScrollLeft = (doc = document) => {
  const $document = doc
  return Math.max(
    $document.documentElement.scrollLeft,
    $document.body.scrollLeft
  )
}

export default getDocumentScrollLeft
