export default setStyles;
/**
 * 给 DOM 元素批量添加 CSS 样式
 * ========================================================================
 * @methods setStyles
 * @see https://developer.mozilla.org/en-US/docs/Web/API/CSSStyleDeclaration/cssText
 * @param {HTMLElement} el
 * @param {Object|String} styles
 */
declare function setStyles(el: HTMLElement, styles: any | string): boolean;
