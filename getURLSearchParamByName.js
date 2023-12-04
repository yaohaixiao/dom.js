import hasOwn from './utils/lang/hasOwn'
import getURLSearchParams from './getURLSearchParams'

/**
 * 获取 URL 地址中查询字符串的某个值
 * @method getURLSearchParamByName
 * @since 1.4.0
 * @param {String} prop
 * @return {string}
 */
const getURLSearchParamByName = (prop) => {
  const params = getURLSearchParams()

  return hasOwn(params, prop) ? params[prop] : ''
}

export default getURLSearchParamByName
