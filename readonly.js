import isElement from './isElement'
import getAttribute from './getAttribute'
import removeAttribute from './removeAttribute'
import setAttribute from './setAttribute'
import { READONLY_INPUT_TYPES } from './utils/enum'

/**
 * 启用或者取消 DOM 元素的只读模式
 * ========================================================================
 * @method readonly
 * @since 1.2.0
 * @see https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes/readonly
 * @param el
 * @return {boolean}
 */
const readonly = (el) => {
  const TAGS = ['input', 'textarea']
  let tagName
  let type

  if (!isElement(el)) {
    return false
  }

  tagName = el.tagName.toLowerCase()

  if (TAGS.indexOf(tagName) === -1) {
    return false
  }

  type = getAttribute(el, 'type').toLowerCase()

  if (READONLY_INPUT_TYPES.indexOf(type) === -1) {
    return false
  }

  if (getAttribute(el, 'readonly')) {
    removeAttribute(el, 'readonly')
  } else {
    setAttribute(el, 'readonly', true)
  }
}

export default readonly
