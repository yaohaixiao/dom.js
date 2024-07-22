export default wrap;
/**
 * 给 NodeList 中的每个 DOM 节点包裹上指定 HTML 标签
 * ========================================================================
 * @method wrap
 * @since 1.1.0
 * @param {HTMLCollection|NodeList} collection
 * @param {String|HTMLElement|Function} wrapElement
 */
declare function wrap(collection: HTMLCollection | NodeList, wrapElement: string | HTMLElement | Function): boolean;
