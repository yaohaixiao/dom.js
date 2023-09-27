import isElement from './utils/types/isElement'
import getStyle from './getStyle'

/**
 * 返回最近的（指包含层级上的最近）包含该元素的滚动父元素
 * （overflow/overflow-x/overflow-y: auto ）。
 * ========================================================================
 * @method getScrollParent
 * @param {HTMLElement|Object} el
 * @return {HTMLElement|Document|null}
 */
const getScrollParent = (el) => {
  const $root = window
  let $parent

  if (!isElement(el) && el !== document) {
    return null
  }

  $parent = el.parentNode

  if (!$parent) {
    return el
  }

  if ($parent === $root.document) {
    if ($root.document.body.scrollTop || $root.document.body.scrollLeft) {
      return $root.document.body
    } else {
      return $root.document.documentElement
    }
  }

  // Firefox want us to check `-x` and `-y` variations as well
  /* istanbul ignore else */
  if (
    ['scroll', 'auto'].indexOf(getStyle($parent, 'overflow')) !== -1 ||
    ['scroll', 'auto'].indexOf(getStyle($parent, 'overflow-x')) !== -1 ||
    ['scroll', 'auto'].indexOf(getStyle($parent, 'overflow-y')) !== -1
  ) {
    return $parent
  }

  return getScrollParent(el.parentNode)
}

export default getScrollParent
