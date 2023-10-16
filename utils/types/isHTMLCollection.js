import toString from '../lang/toString'
import isObject from './isObject'

/**
 * @method isHTMLCollection
 * @param {Object|NodeList|HTMLCollection} el
 * @return {Boolean}
 */
const isHTMLCollection = (el) => {
  return !!(isObject(el) && toString(el) === '[object NodeList]')
}

export default isHTMLCollection
