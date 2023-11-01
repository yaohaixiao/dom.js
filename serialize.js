import isElement from './isElement'

/**
 *
 * ========================================================================
 * @method serialize
 * @see https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams
 * @see https://developer.mozilla.org/en-US/docs/Web/API/FormData
 * @param {HTMLElement} formElement
 */
const serialize = (formElement, isParams = false) => {
  let serialized = {}
  let data

  if (!isElement(formElement) || formElement.tagName.toLowerCase() !== 'form') {
    return false
  }

  data = new FormData(formElement)

  if (isParams) {
    serialized = new URLSearchParams(data).toString()
  } else {
    for (const [key, value] of data) {
      serialized[key] = value
    }
  }

  return serialized
}

export default serialize
