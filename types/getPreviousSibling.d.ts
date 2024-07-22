export default getPreviousSibling;
/**
 * 获取 DOM 元素的前一个邻居元素节点
 * ========================================================================
 * @method getPreviousSibling
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/previousElementSibling
 * @param {HTMLElement|Text} el
 * @param {HTMLElement} el.previousElementSibling
 * @param {ChildNode} el.previousSibling
 * @param {Boolean} [isElementSibling]
 * @return {HTMLElement|null}
 */
declare function getPreviousSibling(el: HTMLElement | Text, isElementSibling?: boolean): HTMLElement | null;
