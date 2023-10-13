import isUndefined from './utils/types/isUndefined'
import getValue from './getValue'
import setValue from './setValue'

/**
 * 获取或者设置 DOM （表单）元素的 value 属性值
 * ========================================================================
 * @method getValue
 * @since 0.5.0
 * @param {HTMLElement} el
 * @param {Boolean|String|Number} value
 * @return {string}
 */
const val = (el, value) => {
  if (!isUndefined(value)) {
    setValue(el, value)
  } else {
    return getValue(el)
  }
}

export default val
