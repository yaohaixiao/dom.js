export default hasClass;
/**
 * 检测 DOM 节点是否包含名为 className 的样式
 * ========================================================================
 * @method hasClass
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains
 * @param {HTMLElement} el - DOM 节点
 * @param {String} className - 样式名称
 * @returns {Boolean}
 */
declare function hasClass(el: HTMLElement, className: string): boolean;
