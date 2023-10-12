import isElement from './isElement'
import getAttribute from './getAttribute'
import { FROM_ELEMENT_TAGS } from './utils/enum'

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
