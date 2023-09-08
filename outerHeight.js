import isElement from './utils/types/isElement'
import isUndefined from './utils/types/isUndefined'
import isFunction from './utils/types/isFunction'
import getStyle from './getStyle'
import setStyle from './setStyle'
import offset from './offset'
import pixel from './pixel'

const outerHeight = (el, val) => {
  let height
  let offsetHeight
  let borderTopHeight
  let borderBottomHeight
  let paddingTopHeight
  let paddingBottomHeight
  let extraHeight
  let isBorderBox

  if (!isElement(el)) {
    return false
  }

  isBorderBox = getStyle(el, 'box-sizing') === 'border-box'
  borderTopHeight = pixel(getStyle(el, 'border-top'))
  borderBottomHeight = pixel(getStyle(el, 'border-bottom'))
  paddingTopHeight = pixel(getStyle(el, 'padding-top'))
  paddingBottomHeight = pixel(getStyle(el, 'padding-bottom'))
  extraHeight =
    borderTopHeight +
    borderBottomHeight +
    paddingTopHeight +
    paddingBottomHeight
  height = pixel(getStyle(el, 'height'))
  offsetHeight = offset(el).height

  if (isFunction(val)) {
    return val(el, {
      isBorderBox,
      borderTopHeight,
      borderBottomHeight,
      paddingTopHeight,
      paddingBottomHeight,
      height,
      offsetHeight
    })
  }

  if (isBorderBox) {
    height = offsetHeight

    if (!isUndefined(val)) {
      if (height !== val) {
        setStyle(el, 'height', pixel(val) - extraHeight)
      }
    } else {
      return height - extraHeight
    }
  } else {
    if (!isUndefined(val)) {
      if (height !== val) {
        setStyle(el, 'height', pixel(val))
      }
    } else {
      return height
    }
  }
}

export default outerHeight
