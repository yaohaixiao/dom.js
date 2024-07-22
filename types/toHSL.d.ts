export default toHSL;
/**
 * 指定颜色（颜色英文名称、16 进制或RGB格式色值）转化成 HSL 格式色值
 * ========================================================================
 * @method toHSL
 * @since 1.3.0
 * @see https://www.niwa.nu/2013/05/math-behind-colorspace-conversions-rgb-hsl/
 * @param {String} color
 * @returns {string|boolean}
 */
declare function toHSL(color: string): string | boolean;
