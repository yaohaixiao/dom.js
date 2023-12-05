import createElement from './createElement'

/**
 * 新窗口打开指定 URL 地址
 * =============================================================
 * @method openURL
 * @since 1.4.0
 * @param url
 */
const openURL = (url, target = '_blank') => {
  const CSSRules =
    'position:absolute;z-index:2;top:0;left:-99999px;opacity:0;overflow:hidden;'
  const $anchor = createElement('a', {
    href: url,
    target,
    style: CSSRules
  })
  const $body = document.body

  $body.appendChild($anchor)
  $anchor.click()
  $body.removeChild($anchor)
}

export default openURL
