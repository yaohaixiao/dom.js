import extend from './utils/lang/extend'
import createElement from './createElement'

/**
 * 链接预加载（重要）资源
 * ========================================================================
 * @method preload
 * @since 1.7.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/rel/preload
 * @param {String} url
 * @param {Object} options
 * @param {String} options.as
 * @param {String} options.type
 * @param {String} [options.media]
 * @param {String} [options.crossorigin]
 */
const preload = (url, options = {}) => {
  const attrs = {
    href: url || '',
    rel: 'preload'
  }

  if (!url) {
    return false
  }

  extend(attrs, options)

  document.head.append(createElement('link', attrs))
}

export default preload
