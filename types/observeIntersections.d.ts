export default observeIntersections;
/**
 * 通用的 IntersectionObserver 观察者处理器
 * ========================================================================
 * @method observeIntersections
 * @since 1.7.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver
 * @sse https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API
 * @param {HTMLElement} el
 * @param {Function} fn
 * @param {Object} [props]
 * @param {String} [props.selector]
 * @param {Object} [props.context]
 * @param {Object|HTMLElement} [props.root]
 * @param {Array} [props.thresholds]
 * @param {Number} [props.intersectionRatio]
 * @param {String} [props.rootMargin]
 * @return {IntersectionObserver}
 */
declare function observeIntersections(el: HTMLElement, fn: Function, props?: {
    selector?: string;
    context?: any;
    root?: any | HTMLElement;
    thresholds?: any[];
    intersectionRatio?: number;
    rootMargin?: string;
}): IntersectionObserver;
