import isElement from './utils/types/isElement'
import getDocumentScrollTop from './getDocumentScrollTop'

const getPageY = (el) => {
  const floor = Math.floor
  let scrollTop
  let box
  let doc
  let pageY

  if (!isElement(el)) {
    return 0
  }

  box = el.getBoundingClientRect()
  doc = el.ownerDocument
  scrollTop = getDocumentScrollTop(doc)

  pageY = floor(box.left)

  if (scrollTop) {
    pageY += scrollTop
  }

  return pageY
}

export default getPageY
