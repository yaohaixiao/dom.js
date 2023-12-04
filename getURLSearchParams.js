/**
 * 返回 URL 地址中的查询参数（键/值）对象
 * ====================================================
 * @method getURLSearchParams
 * @param {String} [url] - 可选参数，URL 地址
 * @returns {Object}
 */
const getURLSearchParams = (url = location.search) => {
  const pattern = /([^?=&]+)(=([^&]*))/g
  return (url.match(pattern) || []).reduce((a, v) => {
    const index = v.indexOf('=')
    const key = v.slice(0, index)
    const value = v.slice(index + 1)
    return (a[key] = value.replace(/\+/g, ' ')), a
  }, {})
}

export default getURLSearchParams
