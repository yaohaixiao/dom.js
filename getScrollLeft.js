/**
 * 获取 DOM 元素的滚动条横向滚动距离
 * ========================================================================
 * @method getScrollLeft
 * @param {HTMLElement|Window} [el]
 * @return {number|number}
 */
const getScrollLeft = (el = window) => {
  return el.scrollX !== undefined ? el.scrollX : el.scrollLeft
}

export default getScrollLeft
