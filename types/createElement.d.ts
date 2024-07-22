export default createElement;
/**
 * 创建 DOM 节点，并添加属性和子节点
 * ========================================================================
 * @method createElement
 * @param {String} tagName - 标签名称
 * @param {Object|Array|HTMLElement|DocumentFragment|String} [attrs] - 属性对象或者子节点
 * @param {Array|HTMLElement|DocumentFragment|String} [children] - 子节点数组
 * @returns {HTMLElement|null}
 */
declare function createElement(tagName: string, attrs?: any | any[] | HTMLElement | DocumentFragment | string, children?: any[] | HTMLElement | DocumentFragment | string): HTMLElement | null;
