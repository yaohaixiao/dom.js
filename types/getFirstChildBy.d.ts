export default getFirstChildBy;
/**
 * 通过过滤函数获取指定 DOM 元素下的（全部） childNode 元素
 * ========================================================================
 * @method getFirstChildBy
 * @since 1.10.0
 * @param {HTMLElement} el
 * @param {ChildNode} el.firstChild
 * @param filter
 * @return {HTMLElement|null}
 */
declare function getFirstChildBy(el: HTMLElement, filter: any): HTMLElement | null;
