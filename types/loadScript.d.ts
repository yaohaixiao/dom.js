export default loadScript;
/**
 * 加载JavaScript文件并在加载时返回Promise
 * ========================================================================
 * @method loadScript
 * @since 1.7.0
 * @param {String} jsURL
 * @return {Promise}
 */
declare function loadScript(jsURL: string): Promise<any>;
