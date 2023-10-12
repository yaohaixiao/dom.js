import isElement from './isElement'
import setAttribute from './setAttribute'
import { FROM_ELEMENT_TAGS } from './utils/enum'

const setValue = (el, val) => {
  if (
    !isElement(el) ||
    FROM_ELEMENT_TAGS.indexOf(el.tagName.toLowerCase()) === -1
  ) {
    return ''
  }

  setAttribute(el, 'value', val)
}

export default setValue
