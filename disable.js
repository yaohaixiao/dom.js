import isElement from './isElement'
import getAttribute from './getAttribute'
import setAttribute from './setAttribute'
import { DISABLE_TAGS } from './utils/enum'

/**
 * 禁用指定 DOM 元素
 * ========================================================================
 * @method disable
 * @since 1.2.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/HTML/Attributes/disabled
 * @param {HTMLElement} el
 */
const disable = (el) => {
  if (
    !isElement(el) ||
    getAttribute(el, 'disabled') ||
    DISABLE_TAGS.indexOf(el.tagName.toLowerCase()) === -1
  ) {
    return false
  }

  setAttribute(el, 'disabled', true)
}

export default disable
