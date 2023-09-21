import getPreviousSiblings from './getPreviousSiblings'

/**
 * 获取 DOM 元素的前面所有邻居元素节点。
 * ========================================================================
 * @method prevAll
 * @alias getPreviousSiblings
 * @param {HTMLElement} el
 * @return {Array}
 */
const prevAll = (el) => {
  return getPreviousSiblings(el)
}

export default prevAll
