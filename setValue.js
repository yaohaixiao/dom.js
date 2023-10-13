import isElement from './isElement'
import setAttribute from './setAttribute'
import { FROM_ELEMENT_TAGS } from './utils/enum'

/**
 * 给 DOM （表单）元素设置 value 属性值
 * ========================================================================
 * @method setValue
 * @since 0.5.0
 * @param {HTMLElement} el
 * @param {Boolean|String|Number} val
 */
const setValue = (el, val) => {
  if (
    !isElement(el) ||
    FROM_ELEMENT_TAGS.indexOf(el.tagName.toLowerCase()) === -1
  ) {
    return false
  }

  setAttribute(el, 'value', val)
}

export default setValue
