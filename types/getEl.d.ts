export default getEl;
/**
 * 返回与指定的选择器组匹配的文档中的 DOM 元素或者 DOM 元素列表。
 * ========================================================================
 * @method  getEl
 * @param {String} selector
 * @param {HTMLElement|Boolean} [el]
 * @param {Boolean} [multiple]
 * @return {NodeListOf<*>|HTMLElement|*}
 */
declare function getEl(selector: string, el?: HTMLElement | boolean, multiple?: boolean): NodeListOf<any> | HTMLElement | any;
