import isElement from './isElement'

/**
 * 获取浏览器或者 DOM 元素纵向滚动条的宽度
 * ========================================================================
 * @method getScrollbarWidth
 * @since 1.4.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Window/innerWidth
 * @return {number}
 */
const getScrollbarWidth = (el) => {
  let innerWidth = 0
  let clientWidth = 0

  if (!el) {
    innerWidth = window.innerWidth
    clientWidth = document.documentElement.clientWidth
  } else {
    if (isElement(el)) {
      innerWidth = el.offsetWidth
      clientWidth = el.clientWidth
    }
  }

  return innerWidth - clientWidth
}

export default getScrollbarWidth
