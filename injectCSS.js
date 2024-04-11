import createElement from './createElement'

/**
 * 向当前文档动态插入 style 标签，以批量添加样式。返回动态创建的 style 标签节点。
 * ========================================================================
 * @method injectCSS
 * @since 1.4.0
 * @param {String} cssRules
 * @param {String} [media]
 * @param {String} [charset]
 * @return {HTMLElement}
 */
const injectCSS = (cssRules, media, charset) => {
  const attrs = {
    type: 'text/css'
  }
  let $style

  if (media) {
    attrs.media = media
  }

  if (charset) {
    cssRules = `@charset "${charset}";` + cssRules
  }

  attrs.innerText = cssRules

  $style = createElement('style', attrs)

  document.head.appendChild($style)

  return $style
}

export default injectCSS
