export default insertAfter;
/**
 * 在参考节点之后插入一个拥有指定父节点的子节点。函数返回被插入过的子节点；
 * 当 newNode 是 DocumentFragment 时，返回空 DocumentFragment。
 * ========================================================================
 * @method insertAfter
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore
 * @param {Element} el
 * @param {HTMLElement} reference
 * @return {HTMLElement|null}
 */
declare function insertAfter(el: Element, reference: HTMLElement): HTMLElement | null;
