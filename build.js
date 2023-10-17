import html from './html'
import isHTML from './utils/types/isHTML'

/**
 * 通过 HTML 创建 DOM 元素
 * ========================================================================
 * @method build
 * @since 1.1.0
 * @param {String} str
 * @return {Element|null}
 */
const build = (str) => {
  if (!isHTML(str)) {
    return null
  }

  return html(str).firstElementChild
}

export default build
