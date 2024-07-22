export default prepend;
/**
 * 将指定 DOM 节点或者 html 文本解析为 Element 元素，并将结果节点插入 reference 元素
 * 自身内部的最前面或者 reference 元素前面。
 * ========================================================================
 * @method prepend
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/prepend
 * @param {HTMLElement|String} el
 * @param {HTMLElement} reference
 * @return {Element|Text|null}
 */
declare function prepend(el: HTMLElement | string, reference: HTMLElement): Element | Text | null;
