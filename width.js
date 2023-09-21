import isElement from './utils/types/isElement'
import isNumber from './utils/types/isNumber'
import isString from './utils/types/isString'
import setStyle from './setStyle'
import offset from './offset'
import isUndefined from './utils/types/isUndefined'

/**
 * 获取或设置 DOM 元素的宽度。
 * ========================================================================
 * @method width
 * @param {HTMLElement} el
 * @param {Number|String} [val]
 * @return {*|number|boolean}
 */
const width = (el, val) => {
  let value

  if (!isElement(el)) {
    return false
  }

  if (isUndefined(val)) {
    return offset(el).width
  } else {
    if (isNumber(val)) {
      value = `${val}px`
    } else if (isString(val)) {
      value = `${val.replace(/\D/gi, '')}px`
    }
    setStyle(el, 'width', value)
  }
}

export default width
