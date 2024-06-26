import getNextSiblings from './getNextSiblings'

/**
 * 获取 DOM 元素的后面所有邻居元素节点。
 * ========================================================================
 * @method nextAll
 * @alias getNextSiblings
 * @param {HTMLElement|Text} el
 * @param {Boolean} [isElementSibling]
 * @return {Array}
 */
const nextAll = (el, isElementSibling = true) => {
  return getNextSiblings(el, isElementSibling)
}

export default nextAll
