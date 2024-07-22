export default insertHTMLBeforeEnd;
/**
 * 来将指定的文本解析为 Element 元素，并将结果节点插入元素内部的最后一个子节点之后。
 * ========================================================================
 * @method insertHTMLBeforeEnd
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentHTML
 * @param {HTMLElement|String} el
 * @param {String} str
 * @param {Boolean} [dangerouslyUseHTMLString]
 * @return {Element|null}
 */
declare function insertHTMLBeforeEnd(el: HTMLElement | string, str: string, dangerouslyUseHTMLString?: boolean): Element | null;
