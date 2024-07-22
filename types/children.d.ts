export default children;
/**
 * 获取 DOM 元素下所有 HTMKLElement 类型的 DOM 元素
 * ========================================================================
 * @method childern
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild
 * @param {HTMLElement} el
 * @param {Function|Boolean} filter
 * @return {Array}
 */
declare function children(el: HTMLElement, filter: Function | boolean): any[];
