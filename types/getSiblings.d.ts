export default getSiblings;
/**
 * 获取 DOM 元素的前面或后面所有邻居元素节点。
 * ========================================================================
 * @method getSiblings
 * @param {HTMLElement|Text} el
 * @param {Boolean} [includeSelf]
 * @param {Boolean} [isElementSibling]
 * @return {Array}
 */
declare function getSiblings(el: HTMLElement | Text, includeSelf?: boolean, isElementSibling?: boolean): any[];
