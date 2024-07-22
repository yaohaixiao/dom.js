export default attrs;
/**
 * 获取或者设置 DOM 节点的单个或者多个 DOM 属性
 * ========================================================================
 * @method attrs
 * @param {HTMLElement} el
 * @param {String|Object|Array} [attr]
 * @param {*} [value]
 * @return {Object|null}
 */
declare function attrs(el: HTMLElement, attr?: string | any | any[], value?: any): any | null;
