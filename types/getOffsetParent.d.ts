export default getOffsetParent;
/**
 * 返回一个指向最近的（指包含层级上的最近）包含该元素的定位元素。
 * 当元素的 style.display 设置为 "none" 时，offsetParent 返回 null。
 * ========================================================================
 * @method getOffsetParent
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLElement/offsetParent
 * @param {HTMLElement} el
 * @return {HTMLElement|null}
 */
declare function getOffsetParent(el: HTMLElement): HTMLElement | null;
