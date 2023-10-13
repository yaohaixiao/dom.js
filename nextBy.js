import getNextSiblingBy from './getNextSiblingBy'

/**
 * 通过过滤器获取 DOM 元素匹配的后面的邻居元素节点
 * ========================================================================
 * @method nextBy
 * @alias getNextSiblingBy
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/nextElementSibling
 * @param {HTMLElement} el
 * @param {Function|String} filter
 * @return {HTMLElement|null}
 */
const nextBy = (el, filter) => {
  return getNextSiblingBy(el, filter)
}

export default nextBy
