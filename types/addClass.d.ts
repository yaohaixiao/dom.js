export default addClass;
/**
 * 给 DOM 节点添加名为 className 的样式
 * ========================================================================
 * @method addClass
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add
 * @param {HTMLElement} el - DOM 节点
 * @param {String} className - 样式名称
 */
declare function addClass(el: HTMLElement, className: string): boolean;
