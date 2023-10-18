import isFunction from './utils/types/isFunction'
import isString from './utils/types/isString'
import isCollection from './isCollection'
import matches from './matches'

/**
 * 返回 NodeList 的元素中与 selector 过滤条件匹配的 DOM 元素（数组）
 * ========================================================================
 * @method filter
 * @since 1.2.0
 * @param {NodeList} collection
 * @param {String|Function} selector
 * @return {Array}
 */
const filter = (collection, selector) => {
  let callback
  let items

  if (
    !isCollection(collection) ||
    (!isString(selector) && !isFunction(selector))
  ) {
    return []
  }

  items = [...collection]

  if (isString(selector)) {
    callback = (item) => {
      return matches(item, selector)
    }
  } else {
    callback = (item, i) => {
      return selector(item, i)
    }
  }

  return items.filter(callback)
}

export default filter
