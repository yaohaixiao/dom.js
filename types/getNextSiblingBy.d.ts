export default getNextSiblingBy;
/**
 * 通过过滤器获取 DOM 元素匹配的后面的邻居元素节点
 * ========================================================================
 * @method getNextSiblingBy
 * @param {HTMLElement|Text} el
 * @param {Function|String} filter
 * @return {HTMLElement|null}
 */
declare function getNextSiblingBy(el: HTMLElement | Text, filter: Function | string): HTMLElement | null;
