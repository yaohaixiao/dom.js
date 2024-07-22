export default html;
/**
 * 获取或者设置 DOM 元素的 innerHTML 属性值，或者通过 HTML 字符串，创建 DOM 元素
 * ========================================================================
 * @method html
 * @param {HTMLElement|String} el
 * @param {String} [strHTML]
 * @return {DocumentFragment|null|*}
 */
declare function html(el: HTMLElement | string, strHTML?: string): DocumentFragment | null | any;
