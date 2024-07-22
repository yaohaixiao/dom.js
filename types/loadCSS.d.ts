export default loadCSS;
/**
 * 加载 CSS 文件并在加载时返回 Promise
 * ========================================================================
 * @method loadCSS
 * @since 1.7.0
 * @param {String} cssURL
 * @param {String} [media]
 * @return {Promise}
 */
declare function loadCSS(cssURL: string, media?: string): Promise<any>;
