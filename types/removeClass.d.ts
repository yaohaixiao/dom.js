export default removeClass;
/**
 * 移除 DOM 节点的 className 样式
 * ========================================================================
 * @method removeClass
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove
 * @param {HTMLElement} el - DOM 节点
 * @param {String} className - 样式名称
 */
declare function removeClass(el: HTMLElement, className: string): boolean;
