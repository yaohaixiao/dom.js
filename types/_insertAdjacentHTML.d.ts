export default _insertAdjacentHTML;
/**
 * 方法将指定的文本解析为 Element 元素，并将结果节点插入到 DOM 树中的指定位置。它不会
 * 重新解析它正在使用的元素，因此它不会破坏元素内的现有元素。这避免了额外的序列化步骤，
 * 使其比直接使用 innerHTML 操作更快。
 * ========================================================================
 * @method _insertAdjacentHTML
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentHTML
 * @param {HTMLElement|String} el
 * @param {String} position - 一个 DOMString，表示插入内容相对于元素的位置，并且必须是以下字符串之一：
 *                            'beforebegin'：元素自身的前面。
 *                            'afterbegin'：插入元素内部的第一个子节点之前。
 *                            'beforeend'：插入元素内部的最后一个子节点之后。
 *                            'afterend'：元素自身的后面。
 * @param {String} str
 * @param {Boolean} [dangerouslyUseHTMLString]
 * @return {Element|Text|null}
 * @private
 */
declare function _insertAdjacentHTML(el: HTMLElement | string, position: string, str: string, dangerouslyUseHTMLString?: boolean): Element | Text | null;
