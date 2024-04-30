import isElement from './isElement'

/**
 * @method getTagName
 * @since 1.9.0
 * @see https://github.com/floating-ui/floating-ui
 * @param {HTMLElement} el
 * @return {string}
 */
const getTagName = (el) => {
  if (!isElement(el)) {
    return ''
  }

  return el.tagName.toLowerCase()
}

export default getTagName
