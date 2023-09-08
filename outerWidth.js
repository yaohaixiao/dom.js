import isElement from './utils/types/isElement'
import isUndefined from './utils/types/isUndefined'
import isFunction from './utils/types/isFunction'
import getStyle from './getStyle'
import setStyle from './setStyle'
import offset from './offset'
import pixel from './pixel'

const outerWidth = (el, val) => {
  let width
  let offsetWidth
  let borderLeftWidth
  let borderRightWidth
  let paddingLeftWidth
  let paddingRightWidth
  let extraWidth
  let isBorderBox

  if (!isElement(el)) {
    return false
  }

  isBorderBox = getStyle(el, 'box-sizing') === 'border-box'
  borderLeftWidth = pixel(getStyle(el, 'border-left'))
  borderRightWidth = pixel(getStyle(el, 'border-right'))
  paddingLeftWidth = pixel(getStyle(el, 'padding-left'))
  paddingRightWidth = pixel(getStyle(el, 'padding-right'))
  extraWidth =
    borderLeftWidth +
    borderRightWidth +
    paddingLeftWidth +
    paddingRightWidth
  width = pixel(getStyle(el, 'width'))
  offsetWidth = offset(el).width

  if (isFunction(val)) {
    return val(el, {
      isBorderBox,
      borderLeftWidth,
      borderRightWidth,
      paddingLeftWidth,
      paddingRightWidth,
      width,
      extraWidth
    })
  }

  if (isBorderBox) {
    width = offsetWidth

    if (!isUndefined(val)) {
      if (width !== val) {
        setStyle(el, 'width', pixel(val) - extraWidth)
      }
    } else {
      return width - extraWidth
    }
  } else {
    if (!isUndefined(val)) {
      if (width !== val) {
        setStyle(el, 'width', pixel(val))
      }
    } else {
      return width
    }
  }
}

export default outerWidth

