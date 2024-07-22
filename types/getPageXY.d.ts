export default getPageXY;
/**
 * 基于页面坐标获取元素的当前( X 和 Y )位置。
 * ========================================================================
 * @method getPageXY
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/ownerDocument
 * @param {HTMLElement} el
 * @return {Object|Boolean}
 */
declare function getPageXY(el: HTMLElement): any | boolean;
