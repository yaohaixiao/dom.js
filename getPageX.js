import isElement from './utils/isElement'
import getDocumentScrollLeft from './getDocumentScrollLeft'

const getPageX = (el) => {
  const floor = Math.floor
  let scrollLeft
  let box
  let doc
  let pageX

  if (!isElement(el)) {
    return false
  }

  box = el.getBoundingClientRect()
  doc = el.ownerDocument
  scrollLeft = getDocumentScrollLeft(doc)

  pageX = floor(box.left)

  if (scrollLeft) {
    pageX += scrollLeft
  }

  return pageX
}

export default getPageX
