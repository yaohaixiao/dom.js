export default has;
/**
 * 将匹配的元素集减少为具有与选择器或过滤函数匹配的子体的元素集。
 * ========================================================================
 * @method has
 * @since 1.2.0
 * @param {HTMLElement|NodeList} el
 * @param {String|Function} selector
 * @return {Array}
 */
declare function has(el: HTMLElement | NodeList, selector: string | Function): any[];
