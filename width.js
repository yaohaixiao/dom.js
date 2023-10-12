import isNumber from './utils/types/isNumber'
import isString from './utils/types/isString'
import isUndefined from './utils/types/isUndefined'
import isElement from './isElement'
import setStyle from './setStyle'
import offset from './offset'

/**
 * 获取或设置 DOM 元素的宽度。
 * ========================================================================
 * @method width
 * @param {HTMLElement} el
 * @param {Number|String} [val]
 * @return {Number|*}
 */
const width = (el, val) => {
  let value

  /* istanbul ignore else */
  if (
    !isElement(el) ||
    (!isUndefined(val) && !isNumber(val) && !isString(val))
  ) {
    return false
  }

  if (isUndefined(val)) {
    return offset(el).width
  } else {
    if (isNumber(val)) {
      value = `${val}px`
    } else {
      value = `${val.replace(/\D/gi, '')}px`
    }

    setStyle(el, 'width', value)
  }
}

export default width
