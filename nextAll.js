import getNextSiblings from './getNextSiblings'

/**
 * 获取 DOM 元素的后面所有邻居元素节点。
 * ========================================================================
 * @method nextAll
 * @alias getNextSiblings
 * @param {HTMLElement} el
 * @return {Array}
 */
const nextAll = (el) => {
  return getNextSiblings(el)
}

export default nextAll
