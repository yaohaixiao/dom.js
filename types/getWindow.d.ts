export default getWindow;
/**
 * 获取 window 对象
 * ========================================================================
 * @method getWindow
 * @since 1.6.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/ownerDocument
 * @param {Node|Window} node
 * @return {*|Window}
 */
declare function getWindow(node: Node | Window): any | Window;
