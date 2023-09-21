import getNextSibling from './getNextSibling'

/**
 * 获取 DOM 元素的后一个邻居元素节点
 * ========================================================================
 * @method next
 * @alias getNextSibling
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/nextElementSibling
 * @param {HTMLElement} el
 * @return {Element|null}
 */
const next = (el) => {
  return getNextSibling(el)
}

export default next
