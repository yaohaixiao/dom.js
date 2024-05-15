import isString from './utils/types/isString'
import isFunction from './utils/types/isFunction'
import isElement from './isElement'
import getEl from './getEl'
import getFirstChildBy from './getFirstChildBy'

/**
 * 通过过滤函数获取指定 DOM 元素下的第一个匹配的 childNode 元素
 * ========================================================================
 * @method getFirstChild
 * @since 1.10.0
 * @param {HTMLElement|String} el
 * @param {Function} [filter]
 * @return {HTMLElement|ChildNode|null}
 */
const getFirstChild = (el, filter) => {
  const $el = isString(el) ? getEl(el) : isElement(el) ? el : null

  if (!$el) {
    return null
  }

  if (isFunction(filter)) {
    return getFirstChildBy($el, filter)
  } else {
    return $el.firstChild
  }
}

export default getFirstChild
