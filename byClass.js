import isElement from './utils/types/isElement'

const byClass = (className, el) => {
  const selector = className.replace(/^./i, '')
  const $el = isElement(el) ? el : document
  return $el.querySelectorAll(`.${selector}`)
}

export default byClass
