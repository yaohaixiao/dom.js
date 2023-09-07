import isElement from './utils/types/isElement'
import isFunction from './utils/types/isFunction'
import isString from './utils/types/isString'
import matches from './matches'

const isMatched = (el, match) => {
  if (!isElement(el)) {
    return false
  }

  if (isFunction(match)) {
    return match(el)
  } else if (isString(match)) {
    return matches(el, match)
  }
}

export default isMatched
