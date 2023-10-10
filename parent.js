import isElement from './isElement'
import isText from './isText'
import getOffsetParent from './getOffsetParent'
import getScrollParent from './getScrollParent'
import getHostOrParent from './getHostOrParent'

/**
 * 获取给定 el 元素的父节点
 * ========================================================================
 * @method parent
 * @param {HTMLElement|Text} el
 * @param {String} [type]
 * @return {*|null}
 */
const parent = (el, type) => {
  let $parent = null

  if (!isElement(el) && !isText(el)) {
    return $parent
  }

  switch (type) {
    case 'offset':
      $parent = getOffsetParent(el)
      break
    case 'scroll':
      $parent = getScrollParent(el)
      break
    default:
      $parent = getHostOrParent(el)
      break
  }

  return $parent
}

export default parent
