import isElement from './utils/types/isElement'
import getDocumentScrollLeft from './getDocumentScrollLeft'
import canPosition from './canPosition'

/**
 * 基于页面坐标获取元素的当前 X 位置。
 * ========================================================================
 * @method getPageX
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/ownerDocument
 * @param {HTMLElement} el
 * @return {Number|Boolean}
 */
const getPageX = (el) => {
  const floor = Math.floor
  let scrollLeft
  let box
  let doc
  let pageX

  if (!isElement(el) || !canPosition(el)) {
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
