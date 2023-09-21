import isElement from './utils/types/isElement'
import isNumber from './utils/types/isNumber'
import isString from './utils/types/isString'
import setStyle from './setStyle'
import offset from './offset'
import isUndefined from './utils/types/isUndefined'

/**
 * 获取或设置 DOM 元素的高度。
 * ========================================================================
 * @method height
 * @param {HTMLElement} el
 * @param {String|Number} [val]
 * @return {number|boolean}
 */
const height = (el, val) => {
  let value

  if (!isElement(el)) {
    return false
  }

  if (isUndefined(val)) {
    return offset(el).height
  } else {
    if (isNumber(val)) {
      value = `${val}px`
    } else if (isString(val)) {
      value = `${val.replace(/\D/gi, '')}px`
    }
    setStyle(el, 'height', value)
  }
}

export default height
