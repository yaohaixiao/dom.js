export default byId;
/**
 * 返回文档中与指定 id 选择器匹配 Element对象
 * ========================================================================
 * @methods byId
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector
 * @param {String} id
 * @param {HTMLElement} [el]
 * @return {HTMLElement}
 */
declare function byId(id: string, el?: HTMLElement): HTMLElement;
