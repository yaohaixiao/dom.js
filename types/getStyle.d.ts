export default getStyle;
/**
 * 获取 DOM 元素的某个 CSS 样式值
 * ========================================================================
 * @method getStyle
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getComputedStyle
 * @param {HTMLElement} el
 * @param {String} attr
 * @returns {String|Boolean}
 */
declare function getStyle(el: HTMLElement, attr: string): string | boolean;
