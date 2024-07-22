export default getFirstChild;
/**
 * 通过过滤函数获取指定 DOM 元素下的第一个匹配的 childNode 元素
 * ========================================================================
 * @method getFirstChild
 * @since 1.10.0
 * @param {HTMLElement|String} el
 * @param {Function} [filter]
 * @return {HTMLElement|ChildNode|null}
 */
declare function getFirstChild(el: HTMLElement | string, filter?: Function): HTMLElement | ChildNode | null;
