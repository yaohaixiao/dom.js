import createElement from './createElement'

/**
 * 链接预取（重要）资源
 * ========================================================================
 * @method prefetch
 * @since 1.7.0
 * @see https://developer.mozilla.org/en-US/docs/Glossary/Prefetch
 * @param {String} url
 */
const prefetch = (url = '') => {
  if (!url) {
    return false
  }

  document.head.append(
    createElement('link', {
      href: url,
      rel: 'prefetch'
    })
  )
}

export default prefetch
