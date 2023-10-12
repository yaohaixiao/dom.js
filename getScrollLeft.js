import getDocumentScrollLeft from './getDocumentScrollLeft'

/**
 * 获取 DOM 元素的滚动条横向滚动距离
 * ========================================================================
 * @method getScrollLeft
 * @param {HTMLElement|Object|Window} [el]
 * @return {Number}
 */
const getScrollLeft = (el = window) => {
  if (el === document) {
    return getDocumentScrollLeft()
  }

  return el.scrollX !== undefined ? el.scrollX : el.scrollLeft
}

export default getScrollLeft
