export default getNextSiblings;
/**
 * 获取 DOM 元素的后面所有邻居元素节点。
 * ========================================================================
 * @method getNextSiblings
 * @param {HTMLElement|Text} el
 * @param {HTMLElement} el.previousElementSibling
 * @param {ChildNode} el.previousSibling
 * @param {Boolean} [isElementSibling]
 * @return {Array}
 */
declare function getNextSiblings(el: HTMLElement | Text, isElementSibling?: boolean): any[];
