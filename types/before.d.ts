export default before;
/**
 * 在指定 DOM 节点后添加子节点或者将 HTML 字符转化成节点添加到前面
 * ========================================================================
 * @method after
 * @param {HTMLElement|String} el
 * @param {HTMLElement} reference
 * @return {Element|null}
 */
declare function before(el: HTMLElement | string, reference: HTMLElement): Element | null;
