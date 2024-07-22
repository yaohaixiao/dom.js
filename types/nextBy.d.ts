export default nextBy;
/**
 * 通过过滤器获取 DOM 元素匹配的后面的邻居元素节点
 * ========================================================================
 * @method nextBy
 * @alias getNextSiblingBy
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/nextElementSibling
 * @param {HTMLElement|Text} el
 * @param {Function|String} filter
 * @return {HTMLElement|null}
 */
declare function nextBy(el: HTMLElement | Text, filter: Function | string): HTMLElement | null;
