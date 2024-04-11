import createElement from './createElement'

/**
 * 加载 CSS 文件并在加载时返回 Promise
 * ========================================================================
 * @method loadCSS
 * @since 1.7.0
 * @param {String} cssURL
 * @param {String} [media]
 * @return {Promise}
 */
const loadCSS = (cssURL, media) => {
  const attrs = {
    type: 'text/css',
    rel: 'stylesheet',
    href: cssURL + '?random=' + new Date().getTime()
  }

  if (media) {
    attrs.media = media
  }

  return new Promise((resolve, reject) => {
    const $link = createElement('link', attrs)

    $link.onload = () => {
      resolve($link)
    }
    $link.onerror = reject

    document.head.append($link)
  })
}

export default loadCSS
