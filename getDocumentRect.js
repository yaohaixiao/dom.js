import getDocument from './getDocument'
import getScroll from './getScroll'
import getScrollbarWidth from './getScrollbarWidth'
import getStyles from './getStyles'

/**
 * 获取 DOM 元素所在的文档的 Rect 尺寸
 * ========================================================================
 * @method getDocumentRect
 * @since 1.8.0
 * @see https://github.com/floating-ui/floating-ui
 * @param {HTMLElement} el
 * @return {Object}
 */
const getDocumentRect = (el) => {
  const max = Math.max
  const html = getDocument(el)
  const scroll = getScroll(el)
  const body = el.ownerDocument?.body

  const width = max(
    html.scrollWidth,
    html.clientWidth,
    body ? body.scrollWidth : 0,
    body ? body.clientWidth : 0
  )
  const height = max(
    html.scrollHeight,
    html.clientHeight,
    body ? body.scrollHeight : 0,
    body ? body.clientHeight : 0
  )

  let x = -scroll.left + getScrollbarWidth(el)
  const y = -scroll.top

  if (getStyles(body || html, ['direction']).direction === 'rtl') {
    x += max(html.clientWidth, body ? body.clientWidth : 0) - width
  }

  return {
    width,
    height,
    x,
    y
  }
}

export default getDocumentRect
