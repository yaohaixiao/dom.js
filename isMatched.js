import isElement from './utils/types/isElement'
import isFunction from './utils/types/isFunction'
import isString from './utils/types/isString'
import matches from './matches'

const isMatched = (el, filter) => {
  if (!isElement(el)) {
    return false
  }

  if (isFunction(filter)) {
    return filter(el)
  } else if (isString(filter)) {
    return matches(el, filter)
  }
}

export default isMatched
