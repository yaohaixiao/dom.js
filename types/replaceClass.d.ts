export default replaceClass;
/**
 * 替换 DOM 节点的样式类
 * ========================================================================
 * @method replaceClass
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/replace
 * @param {HTMLElement} el - 要替换样式的 DOM 节点
 * @param {String} oldCls - 要替换的目标样式名称
 * @param {String} newCls - 新的样式名称
 */
declare function replaceClass(el: HTMLElement, oldCls: string, newCls: string): boolean;
