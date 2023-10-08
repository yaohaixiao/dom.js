import isObject from './utils/types/isObject'
import hasOwn from './utils/lang/hasOwn'
import setAttribute from './setAttribute'

/**
 * 给 DOM 元素一次设置多个 DOM 属性/值
 * ========================================================================
 * @method setAttributes
 * @param {HTMLElement} el
 * @param {Object} attrs
 * @return {boolean}
 */
const setAttributes = (el, attrs) => {
  if (!el || !isObject(attrs)) {
    return false
  }

  Object.keys(attrs).forEach((attr) => {
    const value = attrs[attr]

    /* istanbul ignore else */
    if (hasOwn(attrs, attr)) {
      setAttribute(el, attr, value)
    }
  })
}

export default setAttributes
