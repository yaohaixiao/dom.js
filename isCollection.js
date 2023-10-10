import isHTMLCollection from './utils/types/isHTMLCollection'

/**
 * ========================================================================
 * @method isCoolection
 * @param {*} el
 * @return {*}
 */
const isCollection = (el) => {
  return isHTMLCollection(el)
}

export default isCollection
