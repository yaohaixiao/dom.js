export default next;
/**
 * 获取 DOM 元素的后一个邻居元素节点
 * ========================================================================
 * @method next
 * @alias getNextSibling
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/nextElementSibling
 * @param {HTMLElement|Text} el
 * @param {Boolean} [isElementSibling]
 * @return {Element|null}
 */
declare function next(el: HTMLElement | Text, isElementSibling?: boolean): Element | null;
