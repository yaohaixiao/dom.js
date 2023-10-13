import isElement from './isElement'
import getAttribute from './getAttribute'
import { FROM_ELEMENT_TAGS } from './utils/enum'

/**
 * 获取 DOM （表单）元素的 value 属性值
 * ========================================================================
 * @method getValue
 * @since 0.5.0
 * @param {HTMLElement} el
 * @return {String}
 */
const getValue = (el) => {
  if (
    !isElement(el) ||
    FROM_ELEMENT_TAGS.indexOf(el.tagName.toLowerCase()) === -1
  ) {
    return ''
  }

  return getAttribute(el, 'value')
}

export default getValue
