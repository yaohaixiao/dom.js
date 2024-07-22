export default css;
/**
 * 用来设置或者查询 DOM 元素的 CSS 样式
 * ========================================================================
 * @method css
 * @param {HTMLElement} el
 * @param {String|Object|Array} attr
 * @param {String} [value]
 * @return {Object|String|*}
 */
declare function css(el: HTMLElement, attr: string | any | any[], value?: string): any | string | any;
