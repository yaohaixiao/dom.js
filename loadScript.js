import createElement from './createElement'

/**
 * 加载JavaScript文件并在加载时返回Promise
 * ========================================================================
 * @method loadScript
 * @since 1.7.0
 * @param {String} jsURL
 * @return {Promise}
 */
const loadScript = (jsURL) => {
  return new Promise((resolve, reject) => {
    const $script = createElement('script', {
      type: 'text/javascript',
      src: jsURL + '?random=' + new Date().getTime()
    })

    $script.onload = () => {
      resolve($script)
    }
    $script.onerror = reject

    document.body.append($script)
  })
}

export default loadScript
