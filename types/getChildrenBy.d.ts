export default getChildrenBy;
/**
 * 通过过滤函数获取指定 DOM 元素下的 childNode 元素
 * ========================================================================
 * @method getChildrenBy
 * @since 1.10.0
 * @param {HTMLElement} el
 * @param {Function} filter
 * @return {HTMLElement[]|*[]}
 */
declare function getChildrenBy(el: HTMLElement, filter: Function): HTMLElement[] | any[];
