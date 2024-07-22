export default injectCSS;
/**
 * 向当前文档动态插入 style 标签，以批量添加样式。返回动态创建的 style 标签节点。
 * ========================================================================
 * @method injectCSS
 * @since 1.4.0
 * @param {String} cssRules
 * @param {String} [media]
 * @param {String} [charset]
 * @return {HTMLElement}
 */
declare function injectCSS(cssRules: string, media?: string, charset?: string): HTMLElement;
