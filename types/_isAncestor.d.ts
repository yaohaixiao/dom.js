export default _isAncestor;
/**
 * 判断某个 DOM 元素是否为另一个 DOM 节点的祖先节点
 * ========================================================================
 * @method _isAncestor
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/compareDocumentPosition
 * @param {HTMLElement} ancestor
 * @param {HTMLElement} descendent
 * @return {Boolean}
 * @private
 */
declare function _isAncestor(ancestor: HTMLElement, descendent: HTMLElement): boolean;
