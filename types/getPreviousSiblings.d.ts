export default getPreviousSiblings;
/**
 * 获取 DOM 元素的前面所有邻居元素节点。
 * ========================================================================
 * @method getPreviousSiblings
 * @param {HTMLElement|Text} el
 * @param {HTMLElement} el.previousElementSibling
 * @param {ChildNode} el.previousSibling
 * @param {Boolean} [isElementSibling]
 * @return {Array}
 */
declare function getPreviousSiblings(el: HTMLElement | Text, isElementSibling?: boolean): any[];
