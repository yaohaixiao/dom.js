export default closest;
/**
 * 获取 base 元素父元素最近的包含 selector 选择器的元素
 * ========================================================================
 * @method closest
 * @param {HTMLElement} el - （必须）DOM 元素
 * @param {String} selector - （必须）DOM 元素的选择其
 * @param {HTMLElement} [ctx] - （可选）比对的 DOM 元素
 * @param {Boolean} [includeCTX] - （可选）是否包含 context DOM 元素
 * @returns {HTMLElement|null} - 返回最接近的 DOM 元素
 */
declare function closest(el: HTMLElement, selector: string, ctx?: HTMLElement, includeCTX?: boolean): HTMLElement | null;
