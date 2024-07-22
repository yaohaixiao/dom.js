export default unwrap;
/**
 * 从 DOM 中移除匹配元素集的父元素，将匹配的元素保留在它们的位置
 * ========================================================================
 * @method unwrap
 * @since 1.1.0
 * @param {HTMLCollection|NodeList} collection
 * @param {String} selector
 */
declare function unwrap(collection: HTMLCollection | NodeList, selector: string): boolean;
