export default insertHTMLBeforeBegin;
/**
 * 在指定元素的开头插入HTML字符串。
 * ========================================================================
 * @method insertHTMLBeforeBegin
 * @param {HTMLElement|String} el
 * @param {String} str
 * @param {Boolean} [dangerouslyUseHTMLString]
 * @return {Element|null}
 */
declare function insertHTMLBeforeBegin(el: HTMLElement | string, str: string, dangerouslyUseHTMLString?: boolean): Element | null;
