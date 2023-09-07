import isElement from './utils/types/isElement'

const insertBefore = (el, reference) => {
  const $parent = reference.parentNode

  if (
    !el ||
    !isElement(el) ||
    !reference ||
    !isElement(reference) ||
    !$parent
  ) {
    return null
  }

  return $parent.insertBefore(el, reference)
}

export default insertBefore
