export default parents;
/**
 * 获取给定 el 元素所有的父节点（包括 el 元素自己）
 * ========================================================================
 * @method parents
 * @since 1.7.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/parentNode
 * @param {String|HTMLElement|Text} el
 * @param {Boolean} [includeSelf]
 * @return {Array}
 */
declare function parents(el: string | HTMLElement | Text, includeSelf?: boolean): any[];
