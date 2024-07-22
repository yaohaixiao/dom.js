export default getScrollParent;
/**
 * 返回最近的（指包含层级上的最近）包含该元素的滚动父元素
 * （overflow/overflow-x/overflow-y: auto ）。
 * ========================================================================
 * @method getScrollParent
 * @param {HTMLElement|Object} el
 * @return {HTMLElement|Document|null}
 */
declare function getScrollParent(el: HTMLElement | any): HTMLElement | Document | null;
