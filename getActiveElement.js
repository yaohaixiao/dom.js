/**
 * 返回当前在 DOM 或者 shadow DOM 树中处于聚焦状态的 DOM 元素
 * ========================================================================
 * @method getActiveElement
 * @since 1.7.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Document/activeElement
 * @returns {HTMLElement}
 */
const getActiveElement = () => {
  return document.activeElement
}

export default getActiveElement
