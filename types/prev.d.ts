export default prev;
/**
 * 获取 DOM 元素的前一个邻居元素节点
 * ========================================================================
 * @method prev
 * @alias getPreviousSibling
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/previousElementSibling
 * @param {HTMLElement|Text} el
 * @param {Boolean} [isElementSibling]
 * @return {Element|null}
 */
declare function prev(el: HTMLElement | Text, isElementSibling?: boolean): Element | null;
