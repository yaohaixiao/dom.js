import isString from './utils/types/isString'
import isCollection from './isCollection'
import replace from './replace'
import isMatched from './isMatched'

/**
 * 从 DOM 中移除匹配元素集的父元素，将匹配的元素保留在它们的位置
 * ========================================================================
 * @method unwrap
 * @since 1.1.0
 * @param {HTMLCollection|NodeList} collection
 * @param {String} selector
 */
const unwrap = (collection, selector) => {
  let $collection = []

  if (!isCollection(collection) || !isString(selector)) {
    return false
  }

  $collection = [...collection]

  if ($collection.length < 1) {
    return false
  }

  $collection.forEach(($node, i) => {
    const $parent = $node.parentNode

    /* istanbul ignore else */
    if (isMatched($parent, selector)) {
      replace($node, $parent)
    }
  })
}

export default unwrap
