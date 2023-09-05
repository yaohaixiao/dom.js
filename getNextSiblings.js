import isElement from './utils/isElement'
import getNextSibling from './getNextSibling'

const getNextSiblings = (el) => {
  const next = []
  let $sibling

  if (!isElement(el)) {
    return next
  }

  $sibling = getNextSibling(el)
  next.push($sibling)

  while ($sibling) {
    $sibling = getNextSibling($sibling)
    next.push($sibling)
  }

  return next
}

export default getNextSiblings
