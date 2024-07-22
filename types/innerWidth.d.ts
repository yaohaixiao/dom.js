export default innerWidth;
/**
 * 获取或设置 DOM 元素的 innerWidth 值；
 * innerWidth = style.height + padding 宽度（paddingRight + paddingLeft）
 * ========================================================================
 * @method innerHeight
 * @param {HTMLElement} el
 * @param {Number|Function} [val]
 * @return {Number|*}
 */
declare function innerWidth(el: HTMLElement, val?: number | Function): number | any;
