import isElement from './utils/types/isElement'
import isUndefined from './utils/types/isUndefined'
import isFunction from './utils/types/isFunction'
import getStyle from './getStyle'
import setStyle from './setStyle'
import offset from './offset'
import pixel from './pixel'

const innerWidth = (el, val) => {
  let width
  let offsetWidth
  let paddingLeftWidth
  let paddingRightWidth
  let extraWidth
  let isBorderBox

  if (!isElement(el)) {
    return false
  }

  isBorderBox = getStyle(el, 'box-sizing') === 'border-box'
  paddingLeftWidth = pixel(getStyle(el, 'padding-left'))
  paddingRightWidth = pixel(getStyle(el, 'padding-right'))
  extraWidth =
    paddingLeftWidth +
    paddingRightWidth
  width = pixel(getStyle(el, 'width'))
  offsetWidth = offset(el).width

  if (isFunction(val)) {
    return val(el, {
      isBorderBox,
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

export default innerWidth

