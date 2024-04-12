/**
 * 重定向 URL 地址
 * ========================================================================
 * @method redirect
 * @since 1.7.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Location/replace
 * @param {String} url
 * @param {Boolean} [asLink]
 */
const redirect = (url, asLink = true) => {
  asLink ? (window.location.href = url) : window.location.replace(url)
}

export default redirect
