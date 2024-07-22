export default getColor;
/**
 * 获取DOM 元素 attr 指定的颜色属性值，可以指定 16 进制或者 RGB 格式
 * ========================================================================
 * @method getColor
 * @since 0.4.0
 * @param {HTMLElement} el
 * @param {String} attr
 * @param {Boolean} [isHex]
 * @return {String|Boolean}
 */
declare function getColor(el: HTMLElement, attr: string, isHex?: boolean): string | boolean;
