export default getLastChildBy;
/**
 * @method getLastChildBy
 * @since 1.10.0
 * @param {HTMLElement} el
 * @param {ChildNode} el.lastChild
 * @param {Function} filter
 * @return {HTMLElement|ChildNode|null}
 */
declare function getLastChildBy(el: HTMLElement, filter: Function): HTMLElement | ChildNode | null;
