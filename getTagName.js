import isElement from './isElement'

/**
 * @method getTagName
 * @param {HTMLElement} el
 * @return {string}
 */
const getTagName = (el) => {
  if(!isElement(el)){
    return ''
  }

  return el.tagName.toLowerCase()
}

export default getTagName
