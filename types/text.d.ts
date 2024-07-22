export default text;
/**
 * 获取或者设置 DOM 元素的 innerText 属性值，或者通过字符串，创建 TextNode 元素
 * ========================================================================
 * @method text
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/textContent
 * @param {HTMLElement|String} el
 * @param {String} [str]
 * @return {Text|*}
 */
declare function text(el: HTMLElement | string, str?: string): Text | any;
