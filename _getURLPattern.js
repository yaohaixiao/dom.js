const _getURLPattern = () => {
  const protocol = '(\\w+:)?'
  const user = '([^\\/\\?\\#\\:]+)'
  const password = '(.+)'
  const auth = '(' + user + ':' + password + '@)?'
  const address = '(([a-z\\d]([a-z\\d-]*[a-z\\d])*(\\.)?)+([a-z]{2,})?)'
  const ip = '((\\d{1,3}\\.){3}\\d{1,3})'
  const hostname = '(' + address + '|' + ip + ')'
  const port = '(\\:\\d+)?'
  const host = '(' + hostname + port + ')'
  const pathname = '((\\/[-a-z\\d%_.~+]*)*)'
  const search = '(\\?[;&a-z\\d%_.~+=-]*)?'
  const path = '(' + pathname + search + ')*'
  const hash = '(\\#[-a-z\\d_]*)?'
  const pattern = '^' + protocol + '\\/\\/' + auth + host + path + hash + '$'

  return new RegExp(pattern, 'i')
}

export default _getURLPattern
