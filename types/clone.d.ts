export default clone;
/**
 * 克隆节点
 * ========================================================================
 * @method clone
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/cloneNode
 * @param {HTMLElement|Text|HTMLFrameElement} el
 * @param {Boolean} deep - 受否深度拷贝（默认值：false）。
 *                         false - 仅拷贝 DOM 本身；
 *                         true - 拷贝 DOM 以及所有子节点；
 * @return {ActiveX.IXMLDOMNode|Node|null}
 */
declare function clone(el: HTMLElement | Text | HTMLFrameElement, deep?: boolean): ActiveX.IXMLDOMNode | Node | null;
