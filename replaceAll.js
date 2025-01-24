import getEl from './getEl'
import replace from './replace'

/**
 * 将指定内容（DOM 元素或者 HTML 文本）替换所有 selector 匹配的 DOM 元素
 * ========================================================================
 * @method replaceAll
 * @since 1.12.0
 * @param {String|HTMLElement} selector
 * @param {HTMLElement|String|Function} replacement
 */
const replaceAll = (selector, replacement) => {
  const elements = getEl(selector, true)

  elements.forEach((el) => {
    replace(replacement, el)
  })
}

export default replaceAll
