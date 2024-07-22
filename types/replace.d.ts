export default replace;
/**
 * 用指定 DOM 节点或者将 HTML 字符转化成节点替换 reference 节点
 * ========================================================================
 * @method replace
 * @since 1.1.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/replaceWith
 * @param {HTMLElement|String} el
 * @param {HTMLElement} reference
 * @return {Element|null}
 */
declare function replace(el: HTMLElement | string, reference: HTMLElement): Element | null;
