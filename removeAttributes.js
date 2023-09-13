import isElement from './utils/types/isElement'
import removeAttribute from './removeAttribute'

const removeAttributes = (el, attrs) => {
  let props = attrs

  if (!isElement(el)) {
    return false
  }

  if (!props) {
    props = el.getAttributeNames()
  }

  props.forEach((prop) => {
    removeAttribute(el, prop)
  })
}

export default removeAttributes
