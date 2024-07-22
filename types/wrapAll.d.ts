export default wrapAll;
/**
 * 给（以组邻近的）NodeList 包裹上指定的 HTML 标签
 * ========================================================================
 * @method wrap
 * @since 1.1.0
 * @param {HTMLCollection|NodeList} collection
 * @param {String|HTMLElement|Function} wrapElement
 */
declare function wrapAll(collection: HTMLCollection | NodeList, wrapElement: string | HTMLElement | Function): boolean;
