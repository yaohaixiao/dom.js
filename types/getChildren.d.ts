export default getChildren;
/**
 * 通过过滤函数获取指定 DOM 元素下的（全部） childNode 元素
 * ========================================================================
 * @method getChildren
 * @since 1.10.0
 * @param {String|HTMLElement} el The HTMLElement or an ID to use as the starting point
 * @param {ChildNode} el.firstChild
 * @param {Function|Boolean} [filter]
 * @return {Array} A static array of HTMLElements
 */
declare function getChildren(el: string | HTMLElement, filter?: Function | boolean): any[];
