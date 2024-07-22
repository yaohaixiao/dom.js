export default setAttribute;
/**
 * 给 DOM 节点设置属性/值
 * ========================================================================
 * @method setAttribute
 * @param {HTMLElement} el - DOM 节点
 * @param {String} attr - 属性名称
 * @param {String|Number|Boolean} value - 属性值
 */
declare function setAttribute(el: HTMLElement, attr: string, value: string | number | boolean): boolean;
