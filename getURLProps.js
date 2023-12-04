import _getURLPattern from './_getURLPattern'

/**
 * 解析 URL 地址中的相关属性，返回解析后的对象数据
 * @method getURLProps
 * @since 1.4.0
 * @param {String} url
 * @return {Object}
 */
const getURLProps = (url = location.href) => {
  const pattern = _getURLPattern()
  const matches = pattern.exec(url)
  const protocol = matches[1] ? matches[1].replace(':', '') : ''
  const host = matches[5]

  return {
    protocol,
    username: matches[3] || '',
    password: matches[4] || '',
    hostname: matches[6],
    port: matches[14] ? matches[14].replace(':', '') : '',
    host: matches[5],
    pathname: matches[16],
    search: matches[18] || '',
    path: matches[15],
    hash: matches[19] || '',
    href: url,
    origin: protocol + '://' + host
  }
}

export default getURLProps
