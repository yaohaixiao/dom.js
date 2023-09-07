import isElement from './utils/types/isElement'
import isString from './utils/types/isString'

const text = (el, str) => {
  if (isString(el)) {
    return document.createTextNode(el)
  } else if (isElement(el)) {
    if (str) {
      el.innerHTML = str
    } else {
      return el.innerText
    }
  }
}

export default text
