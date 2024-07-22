export default isShadowRoot;
/**
 * 检测目标 node 是否一个 DOM 子树的根节点
 * ========================================================================
 * @method isShadowRoot
 * @since 1.6.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/ShadowRoot
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Web_components/Using_shadow_DOM
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/shadowRoot
 * @param {Node} node
 * @return {boolean}
 */
declare function isShadowRoot(node: Node): boolean;
