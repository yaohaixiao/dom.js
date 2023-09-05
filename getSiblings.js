import getPreviousSiblings from './getPreviousSiblings'
import getNextSiblings from './getNextSiblings'
import isElement from './utils/isElement'

const getSiblings = (el, includeSelf = false) => {
  let list = []
  let prev = []
  let next = []

  if (!isElement(el)) {
    return list
  }

  prev = getPreviousSiblings(el)
  list.push(...prev)

  if (includeSelf) {
    list.push(el)
  }
  
  next = getNextSiblings(el)
  list.push(...next)

  return list
}

export default getSiblings
