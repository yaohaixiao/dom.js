export default preload;
/**
 * 链接预加载（重要）资源
 * ========================================================================
 * @method preload
 * @since 1.7.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/rel/preload
 * @param {String} url
 * @param {Object} options
 * @param {String} options.as
 * @param {String} options.type
 * @param {String} [options.media]
 * @param {String} [options.crossorigin]
 */
declare function preload(url: string, options?: {
    as: string;
    type: string;
    media?: string;
    crossorigin?: string;
}): boolean;
