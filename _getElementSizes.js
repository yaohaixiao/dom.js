import isElement from './isElement'
import pixel from './utils/pixel'
import getStyle from './getStyle'
import offset from './offset'

/**
 * 获取 DOM 节点的相关尺寸信息，返回相关尺寸数据的对象。
 * ========================================================================
 * @method _getElementSizes
 * @param {HTMLElement} el
 * @return {{paddingRight: (*|number|string), offsetWidth: (*|number), borderTop: (*|number|string), marginLeft: (*|number|string), marginRight: (*|number|string), borderLeft: (*|number|string), rect: DOMRect, paddingBottom: (*|number|string), borderRight: (*|number|string), offsetHeight: number, marginBottom: (*|number|string), paddingTop: (*|number|string), borderBottom: (*|number|string), paddingLeft: (*|number|string), marginTop: (*|number|string)}|null}
 * @private
 */
const _getElementSizes = (el) => {
  let marginTop
  let marginBottom
  let marginLeft
  let marginRight

  let borderTop
  let borderBottom
  let borderLeft
  let borderRight

  let paddingTop
  let paddingBottom
  let paddingLeft
  let paddingRight

  let offsetSize
  let offsetHeight
  let offsetWidth

  let rect

  if (!isElement(el)) {
    return null
  }

  marginTop = pixel(getStyle(el, 'margin-top'))
  marginBottom = pixel(getStyle(el, 'margin-bottom'))
  marginLeft = pixel(getStyle(el, 'margin-left'))
  marginRight = pixel(getStyle(el, 'margin-right'))

  borderTop = pixel(getStyle(el, 'border-top-width'))
  borderBottom = pixel(getStyle(el, 'border-bottom-width'))
  borderLeft = pixel(getStyle(el, 'border-left-width'))
  borderRight = pixel(getStyle(el, 'border-right-width'))

  paddingTop = pixel(getStyle(el, 'padding-top'))
  paddingBottom = pixel(getStyle(el, 'padding-bottom'))
  paddingLeft = pixel(getStyle(el, 'padding-left'))
  paddingRight = pixel(getStyle(el, 'padding-right'))

  offsetSize = offset(el)
  offsetHeight = offsetSize.height
  offsetWidth = offsetSize.width

  rect = el.getBoundingClientRect()

  return {
    marginTop,
    marginBottom,
    marginLeft,
    marginRight,
    borderTop,
    borderBottom,
    borderLeft,
    borderRight,
    paddingTop,
    paddingBottom,
    paddingLeft,
    paddingRight,
    offsetHeight,
    offsetWidth,
    rect
  }
}

export default _getElementSizes
