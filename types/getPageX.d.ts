export default getPageX;
/**
 * 基于页面坐标获取元素的当前 X 位置。
 * ========================================================================
 * @method getPageX
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/ownerDocument
 * @param {HTMLElement} el
 * @return {Number|Boolean}
 */
declare function getPageX(el: HTMLElement): number | boolean;
