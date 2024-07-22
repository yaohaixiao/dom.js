export default isContainingBlock;
/**
 * 用来检测 DOM 元素是否为布局和包含块
 * ========================================================================
 * @method isContainingBlock
 * @since 1.9.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/Containing_block#identifying_the_containing_block
 * @see https://github.com/floating-ui/floating-ui
 * @param {HTMLElement} el
 * @return {Boolean}
 */
declare function isContainingBlock(el: HTMLElement): boolean;
