import getPreviousSiblingBy from './getPreviousSiblingBy'

/**
 * 通过过滤器获取 DOM 元素匹配的前面的邻居元素节点
 * ========================================================================
 * @method prevBy
 * @alias getPreviousSiblingBy
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/previousElementSibling
 * @param {HTMLElement|Text} el
 * @param {Function|String} filter
 * @return {Element|null}
 */
const prevBy = (el, filter) => {
  return getPreviousSiblingBy(el, filter)
}

export default prevBy
