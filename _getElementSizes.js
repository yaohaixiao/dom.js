import pixel from './utils/pixel'
import getStyle from './getStyle'
import offset from './offset'
import isElement from './isElement'

/**
 * 获取 DOM 节点的相关尺寸信息，返回相关尺寸数据的对象。
 * ========================================================================
 * @method _getElementSizes
 * @param {HTMLElement} el
 * @return {{marginBottomHeight: (*|number|string), marginLeftWidth: (*|number|string), paddingTopHeight: (*|number|string), offsetWidth: (*|number), paddingLeftWidth: (*|number|string), paddingRightWidth: (*|number|string), rect: DOMRect, borderTopHeight: (*|number|string), paddingBottomHeight: (*|number|string), borderBottomHeight: (*|number|string), borderLeftWidth: (*|number|string), borderRightWidth: (*|number|string), offsetHeight: number, marginRightWidth: (*|number|string), marginTopHeight: (*|number|string)}|null}
 * @private
 */
const _getElementSizes = (el) => {
  let marginTopHeight
  let marginBottomHeight
  let marginLeftWidth
  let marginRightWidth

  let borderTopHeight
  let borderBottomHeight
  let borderLeftWidth
  let borderRightWidth

  let paddingTopHeight
  let paddingBottomHeight
  let paddingLeftWidth
  let paddingRightWidth

  let offsetHeight
  let offsetWidth

  let rect

  if (!isElement(el)) {
    return null
  }

  marginTopHeight = pixel(getStyle(el, 'margin-top'))
  marginBottomHeight = pixel(getStyle(el, 'margin-bottom'))
  marginLeftWidth = pixel(getStyle(el, 'margin-left'))
  marginRightWidth = pixel(getStyle(el, 'margin-right'))

  borderTopHeight = pixel(getStyle(el, 'border-top'))
  borderBottomHeight = pixel(getStyle(el, 'border-bottom'))
  borderLeftWidth = pixel(getStyle(el, 'border-left'))
  borderRightWidth = pixel(getStyle(el, 'border-right'))

  paddingTopHeight = pixel(getStyle(el, 'padding-top'))
  paddingBottomHeight = pixel(getStyle(el, 'padding-bottom'))
  paddingLeftWidth = pixel(getStyle(el, 'padding-left'))
  paddingRightWidth = pixel(getStyle(el, 'padding-right'))

  offsetHeight = offset(el).height
  offsetWidth = offset(el).width

  rect = el.getBoundingClientRect()

  return {
    marginTopHeight,
    marginBottomHeight,
    marginLeftWidth,
    marginRightWidth,
    borderTopHeight,
    borderBottomHeight,
    borderLeftWidth,
    borderRightWidth,
    paddingTopHeight,
    paddingBottomHeight,
    paddingLeftWidth,
    paddingRightWidth,
    offsetHeight,
    offsetWidth,
    rect
  }
}

export default _getElementSizes
