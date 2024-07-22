export default getPageY;
/**
 * 基于页面坐标获取元素的当前 Y 位置。
 * ========================================================================
 * @method getPageY
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/ownerDocument
 * @param {HTMLElement} el
 * @return {Number|Boolean}
 */
declare function getPageY(el: HTMLElement): number | boolean;
