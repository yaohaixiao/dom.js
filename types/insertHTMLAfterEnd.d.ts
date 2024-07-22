export default insertHTMLAfterEnd;
/**
 * 将指定的文本解析为 Element 元素，并将结果节点插入到 DOM 树中的指定 DOM 节点之后。
 * ========================================================================
 * @method insertHTMLAfterEnd
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentHTML
 * @param {HTMLElement|String} el
 * @param {String} str
 * @param {Boolean} [dangerouslyUseHTMLString]
 * @return {Element|null}
 */
declare function insertHTMLAfterEnd(el: HTMLElement | string, str: string, dangerouslyUseHTMLString?: boolean): Element | null;
