export default getPreviousSiblingBy;
/**
 * 通过过滤器获取 DOM 元素匹配的前面的邻居元素节点
 * ========================================================================
 * @method getPreviousSiblingBy
 * @param {HTMLElement|Text} el
 * @param {Function|String} filter
 * @return {HTMLElement|null}
 */
declare function getPreviousSiblingBy(el: HTMLElement | Text, filter: Function | string): HTMLElement | null;
