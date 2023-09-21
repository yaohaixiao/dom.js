import isElement from './utils/types/isElement'

/**
 * 获取 DOM 元素的前一个邻居元素节点
 * ========================================================================
 * @method getPreviousSibling
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/previousElementSibling
 * @param {HTMLElement} el
 * @return {Element|null}
 */
const getPreviousSibling = (el) => {
  return isElement(el) ? el.previousElementSibling : null
}

export default getPreviousSibling
