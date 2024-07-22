export default redirect;
/**
 * 重定向 URL 地址
 * ========================================================================
 * @method redirect
 * @since 1.7.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Location/replace
 * @param {String} url
 * @param {Boolean} [asLink]
 */
declare function redirect(url: string, asLink?: boolean): void;
