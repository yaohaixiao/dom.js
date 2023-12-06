/**
 * 检测当前浏览器引擎是否为 WebKit 内核
 * ========================================================================
 * @method isWebKit
 * @return {string|boolean}
 */
const isWebKit = () => {
  const ua = navigator.userAgent
  const matches = ua.match(/AppleWebKit\/(\S*)/)

  if (/KHTML/.test(ua)) {
    return true
  }

  return matches && matches[1]
}

export default isWebKit
