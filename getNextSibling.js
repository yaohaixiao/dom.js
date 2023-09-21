import isElement from './utils/types/isElement'

/**
 * 获取 DOM 元素的后一个邻居元素节点
 * ========================================================================
 * @method getNextSibling
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/nextElementSibling
 * @param {HTMLElement} el
 * @return {Element|null}
 */
const getNextSibling = (el) => {
  return isElement(el) ? el.nextElementSibling : null
}

export default getNextSibling
