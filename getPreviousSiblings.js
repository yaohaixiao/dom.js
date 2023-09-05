import isElement from './utils/isElement'
import getPreviousSibling from './getPreviousSibling'

const getPreviousSiblings = (el) => {
  const prev = []
  let $sibling

  if (!isElement(el)) {
    return prev
  }

  $sibling = getPreviousSibling(el)
  prev.push($sibling)

  while ($sibling) {
    $sibling = getPreviousSibling($sibling)
    prev.push($sibling)
  }

  return prev
}

export default getPreviousSiblings
