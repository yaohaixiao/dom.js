export default append;
/**
 * 将指定 DOM 节点或者 html 文本解析为 Element 元素，并将结果节点插入 el 元素自身
 * 内部的最后面。
 * ========================================================================
 * @method prepend
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/append
 * @param {HTMLElement|String} el
 * @param {HTMLElement} reference
 * @return {Element|Text|null}
 */
declare function append(el: HTMLElement | string, reference: HTMLElement): Element | Text | null;
