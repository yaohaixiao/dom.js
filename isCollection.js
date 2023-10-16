import isHTMLCollection from './utils/types/isHTMLCollection'

/**
 * 检测是否为 NodeList
 * ========================================================================
 * @method isCoolection
 * @param {HTMLElement|Object} el
 * @return {Boolean}
 */
const isCollection = (el) => {
  return isHTMLCollection(el)
}

export default isCollection
