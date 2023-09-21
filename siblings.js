import getSiblings from './getSiblings'

/**
 * 获取 DOM 元素的前面或后面所有邻居元素节点。
 * ========================================================================
 * @method siblings
 * @alias getSiblings
 * @param {HTMLElement} el
 * @param {Boolean} [includeSelf]
 * @return {Array}
 */
const siblings = (el, includeSelf = false) => {
  return getSiblings(el, includeSelf)
}

export default siblings
