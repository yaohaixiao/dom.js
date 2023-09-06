import isElement from './utils/isElement'

const byId = (id, el) => {
  const selector = id.replace(/^#/i, '')
  const $el = isElement(el) ? el : document
  return $el.querySelector(`#${selector}`)
}

export default byId