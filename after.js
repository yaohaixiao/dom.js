import isElement from './utils/isElement'
import isHTML from './utils/isHTML'
import insertAfter from './insertAfter'
import insertHTMLAfter from './insertHTMLAfter'

const after = (el, reference) => {
  if (!isElement(el)) {
    return false
  }

  if (isElement(reference)) {
    insertAfter(el, reference)
  } else if (isHTML(reference)) {
    insertHTMLAfter(el, reference)
  }
}

export default after
