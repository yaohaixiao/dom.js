import isElement from './utils/types/isElement'
import getDocumentScrollTop from './getDocumentScrollTop'
import canPosition from './canPosition'

/**
 * 基于页面坐标获取元素的当前 Y 位置。
 * ========================================================================
 * @method getPageY
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/ownerDocument
 * @param {HTMLElement} el
 * @return {Number|Boolean}
 */
const getPageY = (el) => {
  const floor = Math.floor
  let scrollTop
  let box
  let doc
  let pageY

  if (!isElement(el) || !canPosition(el)) {
    return false
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
