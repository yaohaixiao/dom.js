export default nextAll;
/**
 * 获取 DOM 元素的后面所有邻居元素节点。
 * ========================================================================
 * @method nextAll
 * @alias getNextSiblings
 * @param {HTMLElement|Text} el
 * @param {Boolean} [isElementSibling]
 * @return {Array}
 */
declare function nextAll(el: HTMLElement | Text, isElementSibling?: boolean): any[];
