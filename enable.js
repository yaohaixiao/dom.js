import isElement from './isElement'
import getAttribute from './getAttribute'
import removeAttribute from './removeAttribute'
import { DISABLE_TAGS } from './utils/enum'

/**
 * 启用指定 DOM 元素
 * ========================================================================
 * @method enable
 * @since 1.2.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/disabled
 * @param {HTMLElement} el
 */
const enable = (el) => {
  if (
    !isElement(el) ||
    !getAttribute(el, 'disabled') ||
    DISABLE_TAGS.indexOf(el.tagName.toLowerCase()) === -1
  ) {
    return false
  }

  removeAttribute(el, 'disabled')
}

export default enable
