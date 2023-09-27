import getDocumentScrollTop from './getDocumentScrollTop'

/**
 * 获取 DOM 元素的滚动条纵向滚动距离
 * ========================================================================
 * @method getScrollTop
 * @param {HTMLElement|Object|Window} [el]
 * @return {Number}
 */
const getScrollTop = (el = window) => {
  if (el === document) {
    return getDocumentScrollTop()
  }

  return el.scrollY !== undefined ? el.scrollY : el.scrollTop
}

export default getScrollTop
