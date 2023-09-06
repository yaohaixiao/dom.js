import isElement from './utils/isElement'
import getNextSibling from './getNextSibling'

const insertAfter = (el, reference) => {
  const $parent = reference.parentNode
  let $nextSibling

  if (
    !el ||
    !isElement(el) ||
    !reference ||
    !isElement(reference) ||
    !$parent
  ) {
    return null
  }

  $nextSibling = getNextSibling(reference)

  if ($nextSibling) {
    return $parent.insertBefore(el, $nextSibling)
  } else {
    return $parent.appendChild(el)
  }
}

export default insertAfter
