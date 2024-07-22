export default contains;
/**
 * 判断某个 DOM 元素中是否包含另一个 DOM 元素
 * ========================================================================
 * @method contains
 * @param {HTMLElement|String} el
 * @param {HTMLElement} ancestor
 * @return {Boolean}
 */
declare function contains(el: HTMLElement | string, ancestor: HTMLElement): boolean;
