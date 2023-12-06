import createElement from './createElement'

/**
 * 向当前文档动态插入 style 标签，以批量添加样式。返回动态创建的 style 标签节点。
 * ========================================================================
 * @method injectCSS
 * @since 1.4.0
 * @param {String} cssRules
 * @return {HTMLElement}
 */
const injectCSS = (cssRules) => {
  const $style = createElement('style', {
    type: 'text/css',
    innerText: cssRules
  })

  document.head.appendChild($style)

  return $style
}

export default injectCSS
