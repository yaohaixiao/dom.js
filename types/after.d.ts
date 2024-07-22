export default after;
/**
 * 在指定 DOM 节点后添加子节点或者将 HTML 字符转化成节点添加到后面
 * ========================================================================
 * @method after
 * @param {HTMLElement|String} el
 * @param {HTMLElement} reference
 * @return {Element|null}
 */
declare function after(el: HTMLElement | string, reference: HTMLElement): Element | null;
