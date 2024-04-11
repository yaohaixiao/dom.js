import createElement from './createElement'

/**
 * 加载 CSS 文件并在加载时返回 Promise
 * ========================================================================
 * @method loadCSS
 * @since 1.7.0
 * @param {String} cssURL
 * @return {Promise}
 */
const loadCSS = (cssURL) => {
  return new Promise((resolve, reject) => {
    const $link = createElement('link', {
      type: 'text/css',
      rel: 'stylesheet',
      href: cssURL + '?random=' + new Date().getTime()
    })

    $link.onload = resolve
    $link.onerror = reject

    document.head.append($link)
  })
}

export default loadCSS
