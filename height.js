import isNumber from './utils/types/isNumber'
import isString from './utils/types/isString'
import isUndefined from './utils/types/isUndefined'
import isElement from './isElement'
import setStyle from './setStyle'
import offset from './offset'

/**
 * 获取或设置 DOM 元素的高度。
 * ========================================================================
 * @method height
 * @param {HTMLElement} el
 * @param {String|Number} [val]
 * @return {Number|*}
 */
const height = (el, val) => {
  let value

  if (
    !isElement(el) ||
    (!isUndefined(val) && !isNumber(val) && !isString(val))
  ) {
    return false
  }

  if (isUndefined(val)) {
    return offset(el).height
  } else {
    if (isNumber(val)) {
      value = `${val}px`
    } else {
      value = `${val.replace(/\D/gi, '')}px`
    }

    setStyle(el, 'height', value)
  }
}

export default height
