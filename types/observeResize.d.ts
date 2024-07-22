export default observeResize;
/**
 * 通用的 ResizeObserver 观察者处理器
 * ========================================================================
 * @method observeResize
 * @since 1.8.0
 * @see https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserver
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserverEntry/contentBoxSize
 * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/writing-mode
 * @param {HTMLElement} el
 * @param {Function} callback
 * @param {Number} [delay]
 * @return {ResizeObserver|boolean}
 */
declare function observeResize(el: HTMLElement, callback: Function, delay?: number): ResizeObserver | boolean;
