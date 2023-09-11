import pixel from './utils/pixel'
import getStyle from './getStyle'
import offset from './offset'
import isElement from './isElement'

const getElementSizes = (el) => {
  let marginTopHeight
  let marginBottomHeight
  let borderTopHeight
  let borderBottomHeight
  let paddingTopHeight
  let paddingBottomHeight
  let offsetHeight
  let marginLeftWidth
  let marginRightWidth
  let borderLeftWidth
  let borderRightWidth
  let paddingLeftWidth
  let paddingRightWidth
  let offsetWidth

  if (!isElement(el)) {
    return null
  }

  marginTopHeight = pixel(getStyle(el, 'margin-top'))
  marginBottomHeight = pixel(getStyle(el, 'margin-bottom'))
  borderTopHeight = pixel(getStyle(el, 'border-top'))
  borderBottomHeight = pixel(getStyle(el, 'border-bottom'))
  paddingTopHeight = pixel(getStyle(el, 'padding-top'))
  paddingBottomHeight = pixel(getStyle(el, 'padding-bottom'))
  offsetHeight = offset(el).height

  marginLeftWidth = pixel(getStyle(el, 'margin-left'))
  marginRightWidth = pixel(getStyle(el, 'margin-right'))
  borderLeftWidth = pixel(getStyle(el, 'border-left'))
  borderRightWidth = pixel(getStyle(el, 'border-right'))
  paddingLeftWidth = pixel(getStyle(el, 'padding-left'))
  paddingRightWidth = pixel(getStyle(el, 'padding-right'))
  offsetWidth = offset(el).width

  return {
    marginTopHeight,
    marginBottomHeight,
    borderTopHeight,
    borderBottomHeight,
    paddingTopHeight,
    paddingBottomHeight,
    offsetHeight,
    marginLeftWidth,
    marginRightWidth,
    borderLeftWidth,
    borderRightWidth,
    paddingLeftWidth,
    paddingRightWidth,
    offsetWidth
  }
}

export default getElementSizes
