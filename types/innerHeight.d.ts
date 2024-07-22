export default innerHeight;
/**
 * 获取或设置 DOM 元素的 innerHeight 值；
 * innerHeight = style.height + padding 高度（paddingTop + paddingBottom）
 * ========================================================================
 * @method innerHeight
 * @param {HTMLElement} el
 * @param {Number|Function} [val]
 * @return {Number|*}
 */
declare function innerHeight(el: HTMLElement, val?: number | Function): number | any;
