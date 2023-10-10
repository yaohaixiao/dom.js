import isArray from './utils/types/isArray'
import isElement from './isElement'
import getAttribute from './getAttribute'

/**
 * 获取 DOM 元素的单个或多个 HTML 属性值（键/值对象）
 * ========================================================================
 * @method getAttributes
 * @param {HTMLElement} el
 * @param {Array} [props]
 * @return {Object|null}
 */
const getAttributes = (el, props = []) => {
  const attrs = {}
  let keys = [...props]

  if (!isElement(el)) {
    return null
  }

  if (!isArray(keys) || keys.length < 1) {
    keys = el.getAttributeNames()
  }

  keys.forEach((key) => {
    const value = getAttribute(el, key)

    /* istanbul ignore else */
    if (value) {
      attrs[key] = value
    }
  })

  return attrs
}

export default getAttributes
