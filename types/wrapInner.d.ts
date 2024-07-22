export default wrapInner;
/**
 * 给 NodeList 中的每个 DOM 节点内部包裹上指定 HTML 标签
 * ========================================================================
 * @method wrapInner
 * @since 1.1.0
 * @param {HTMLCollection|NodeList} collection
 * @param {String|HTMLElement|Function} wrapElement
 */
declare function wrapInner(collection: HTMLCollection | NodeList, wrapElement: string | HTMLElement | Function): boolean;
