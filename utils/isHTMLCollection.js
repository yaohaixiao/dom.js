import toString from './toString'
import isObject from './isObject'

const isHTMLCollection = (el) => {
  return !!(isObject(el) && toString(el) === '[object NodeList]')
}

export default isHTMLCollection
