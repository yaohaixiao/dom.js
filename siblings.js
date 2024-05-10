import getSiblings from './getSiblings'

/**
 * 获取 DOM 元素的前面或后面所有邻居元素节点。
 * ========================================================================
 * @method siblings
 * @alias getSiblings
 * @param {HTMLElement|Text} el
 * @param {Boolean} [includeSelf]
 * @param {Boolean} [isElementSibling]
 * @return {Array}
 */
const siblings = (el, includeSelf = false, isElementSibling = true) => {
  return getSiblings(el, includeSelf, isElementSibling)
}

export default siblings
