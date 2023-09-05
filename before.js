import isElement from './utils/isElement'
import insertBefore from './insertBefore'
import isHTML from './utils/isHTML'
import insertHTMLBefore from './insertHTMLBefore'

const before = (el, reference) => {
  if(!isElement(el)){
    return false
  }

  if(isElement(reference)) {
    insertBefore(el, reference)
  } else if(isHTML(reference)) {
    insertHTMLBefore(el, reference)
  }
}

export default before
