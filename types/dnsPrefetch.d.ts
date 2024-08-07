export default dnsPrefetch;
/**
 * 尝试在请求（第三方）资源之前预解析域名。
 * ========================================================================
 * @method dnsPrefetch
 * @since 1.7.0
 * @see https://developer.mozilla.org/en-US/docs/Web/Performance/dns-prefetch
 * @param {String} domain
 */
declare function dnsPrefetch(domain: string): boolean;
