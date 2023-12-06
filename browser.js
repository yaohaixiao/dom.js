/**
 * 检测浏览器信息，返回浏览器名称和版本信息
 * ========================================================================
 * @method browser
 * @see https://stackoverflow.com/questions/9514179/how-to-find-the-operating-system-details-using-javascript
 * @return {{major: number, name: string, version: string}}
 */
const browser = () => {
  const ua = navigator.userAgent
  let index = 0
  let name = 'unknown'
  let major = ''
  let version = '--'

  // Opera
  if (ua.indexOf('Opera') !== -1) {
    index = ua.indexOf('Opera')
    name = 'Opera'
    version = ua.substring(index + 6)

    if (ua.indexOf('Version') !== -1) {
      index = ua.indexOf('Version')
      version = ua.substring(index + 8)
    }
  }
  // MSIE
  else if (ua.indexOf('MSIE') !== -1) {
    index = ua.indexOf('MSIE')
    name = 'IE'
    version = ua.substring(index + 5)
  }
  // Edge
  else if (ua.indexOf('Edg') !== -1) {
    index = ua.indexOf('Edg')
    name = 'Edge'
    version = ua.substring(index + 4)
  }
  // Chrome
  else if (ua.indexOf('Chrome') !== -1) {
    index = ua.indexOf('Chrome')
    name = 'Chrome'
    version = ua.substring(index + 7)
  }
  // Safari
  else if (ua.indexOf('Safari') !== -1) {
    index = ua.indexOf('Safari')
    name = 'Safari'
    version = ua.substring(index + 7)

    if (ua.indexOf('Version') !== -1) {
      index = ua.indexOf('Version')
      version = ua.substring(index + 8)
    }
  }
  // Firefox
  else if (ua.indexOf('Firefox') !== -1) {
    index = ua.indexOf('Firefox')
    name = 'Firefox'
    version = ua.substring(index + 8)
  }
  // MSIE 11+
  else if (ua.indexOf('Trident/') !== -1) {
    name = 'IE 11'
    version = ua.substring(ua.indexOf('rv:') + 3)
  }
  // Other browsers
  else if (ua.lastIndexOf(' ') + 1 < ua.lastIndexOf('/')) {
    index = ua.lastIndexOf('/')
    name = ua.substring(ua.lastIndexOf(' ') + 1, index)
    version = ua.substring(index + 1)

    if (name.toLowerCase() == name.toUpperCase()) {
      name = navigator.appName || 'unknown'
    }
  }

  // trim the version string
  if (version.indexOf(';') !== -1) {
    index = version.indexOf(';')
  } else if (version.indexOf(' ') !== -1) {
    index = version.indexOf(' ')
  } else if (version.indexOf(')') !== -1) {
    index = version.indexOf(')')
  }

  if (index > -1) {
    version = version.substring(0, index)
  }

  major = parseInt('' + version, 10)

  if (isNaN(major)) {
    version = '' + parseFloat(navigator.appVersion)
    major = parseInt(navigator.appVersion, 10)
  }

  return {
    name,
    major,
    version
  }
}

export default browser
