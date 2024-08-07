export default getProperty;
/**
 * 获取 CSS 变量（属性）值。返回一个 DOMString ，其中包含请求的 CSS 属性的值。
 * ========================================================================
 * @method getPropperty
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/CSSStyleDeclaration/getPropertyValue
 * @param {String} prop
 * @return {String}
 */
declare function getProperty(prop: string): string;
