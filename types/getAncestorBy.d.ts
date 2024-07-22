export default getAncestorBy;
/**
 * 获取指定 DOM 节点的祖先节点
 * @method getAncestorBy
 * @since 1.10.0
 * @param {HTMLElement} el
 * @param {Function} filter
 * @return {HTMLElement|null}
 */
declare function getAncestorBy(el: HTMLElement, filter: Function): HTMLElement | null;
