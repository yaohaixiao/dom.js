export default filter;
/**
 * 返回 NodeList 的元素中与 selector 过滤条件匹配的 DOM 元素（数组）
 * ========================================================================
 * @method filter
 * @since 1.2.0
 * @param {NodeList} collection
 * @param {String|Function} selector
 * @return {Array}
 */
declare function filter(collection: NodeList, selector: string | Function): any[];
