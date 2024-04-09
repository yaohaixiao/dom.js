import isString from './utils/types/isString'
import isElement from './isElement'
import isText from './isText'
import byId from './byId'

/**
 * 获取给定 el 元素所有的父节点（包括 el 元素自己）
 * ========================================================================
 * @method parents
 * @since 1.7.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/parentNode
 * @param {String|HTMLElement|Text} el
 * @param {Boolean} [includeSelf]
 * @return {Array}
 */
const parents = (el, includeSelf = false) => {
  const $parents = []
  let $el
  let $parent

  if ($el) {
    return $parents
  }

  if (isElement(el) || isText(el)) {
    $el = el
  } else if (isString(el)) {
    $el = byId(el)
  }

  if (!$el) {
    return $parents
  }

  if (includeSelf) {
    $parents.push($el)
  }

  $parent = $el.parentNode

  while ($parent) {
    $parents.unshift($parent)
    $parent = $parent.parentNode
  }

  return $parents
}

export default parents
