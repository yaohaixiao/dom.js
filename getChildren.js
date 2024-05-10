import isFunction from './utils/types/isFunction'
import isString from './utils/types/isString'
import isElement from './isElement'
import getEl from './getEl'
import getChildrenBy from './getChildrenBy'
import siblings from './siblings'

/**
 * 通过过滤函数获取指定 DOM 元素下的（全部） childNode 元素
 * ========================================================================
 * @method getChildren
 * @since 1.10.0
 * @param {String|HTMLElement} el The HTMLElement or an ID to use as the starting point
 * @param {ChildNode} el.firstChild
 * @param {Function|Boolean} [filter]
 * @return {Array} A static array of HTMLElements
 */
const getChildren = (el, filter) => {
  const $el = isString(el) ? getEl(el) : isElement(el) ? el : null
  let children = []

  if (!$el) {
    return children
  }

  if (isFunction(filter)) {
    children = getChildrenBy($el, filter)
  } else {
    children = siblings($el.firstChild, true)
  }

  return children
}

export default getChildren
