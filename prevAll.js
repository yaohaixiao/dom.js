import getPreviousSiblings from './getPreviousSiblings'

/**
 * 获取 DOM 元素的前面所有邻居元素节点。
 * ========================================================================
 * @method prevAll
 * @alias getPreviousSiblings
 * @param {HTMLElement|Text} el
 * @param {Boolean} [isElementSibling]
 * @return {Array}
 */
const prevAll = (el, isElementSibling = true) => {
  return getPreviousSiblings(el, isElementSibling)
}

export default prevAll
