import isElement from './utils/types/isElement'
import insertBefore from './insertBefore'
import isHTML from './utils/types/isHTML'
import insertHTMLBefore from './insertHTMLBefore'

const before = (el, reference) => {
  if (!isElement(el)) {
    return false
  }

  if (isElement(reference)) {
    insertBefore(el, reference)
  } else if (isHTML(reference)) {
    insertHTMLBefore(el, reference)
  }
}

export default before
