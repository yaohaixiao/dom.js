/**
 * 获取 DOM 元素的滚动条纵向滚动距离
 * ========================================================================
 * @method getScrollTop
 * @param {HTMLElement|Window} [el]
 * @return {Number}
 */
const getScrollTop = (el = window) => {
  return el.scrollY !== undefined ? el.scrollY : el.scrollTop
}

export default getScrollTop
