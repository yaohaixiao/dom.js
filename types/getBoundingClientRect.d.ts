export default getBoundingClientRect;
/**
 * 获取 DOM 元素的 getBoundingClientRect 数据
 * ========================================================================
 * @method getBoundingClientRect
 * @since 1.7.0
 * @see https://github.com/floating-ui/floating-ui
 * @param {HTMLElement} el
 * @param {Boolean} [includeScale]
 * @param {Boolean} [isFixedStrategy]
 * @return {Object}
 */
declare function getBoundingClientRect(el: HTMLElement, includeScale?: boolean, isFixedStrategy?: boolean): any;
