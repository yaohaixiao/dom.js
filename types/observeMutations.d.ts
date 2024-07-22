export default observeMutations;
/**
 * 通用的 MutationObserver 观察者处理器，提供了监视对 DOM 树所做更改的能力。
 * ========================================================================
 * @method observeMutations
 * @since 1.7.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver
 * @param {HTMLElement} el
 * @param {Function} fn
 * @param {Object} [props]
 * @param {Boolean} [props.childList]
 * @param {Boolean} [props.attributes]
 * @param {Boolean} [props.attributeOldValue]
 * @param {Boolean} [props.caracterData]
 * @param {Boolean} [props.caracterDataOldValue]
 * @param {Boolean} [props.subtree]
 * @returns {MutationObserver}
 */
declare function observeMutations(el: HTMLElement, fn: Function, props?: {
    childList?: boolean;
    attributes?: boolean;
    attributeOldValue?: boolean;
    caracterData?: boolean;
    caracterDataOldValue?: boolean;
    subtree?: boolean;
}): MutationObserver;
