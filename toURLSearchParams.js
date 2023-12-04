import isObject from './utils/types/isObject'

/**
 * 将普通对象类型的数据转化成 URL 地址中的查询参数字符串
 * ====================================================
 * @method toURLSearchParams
 * @param {Object} o
 * @return {string}
 */
const toURLSearchParams = (o) => {
  const params = []
  const keys = Object.keys(o)

  if (!isObject(o)) {
    return ''
  }

  if (URLSearchParams) {
    return new URLSearchParams(o).toString()
  }

  keys.forEach((key) => {
    params.push(`${key}=${o[key]}`)
  })

  return decodeURIComponent(params.join('&'))
}

export default toURLSearchParams
