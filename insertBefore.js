import isElement from './isElement'
import isDOM from './isDOM'

/**
 * 在参考节点之前插入一个拥有指定父节点的子节点。函数返回被插入过的子节点；
 * 当 newNode 是 DocumentFragment 时，返回空 DocumentFragment。
 * ========================================================================
 * @method insertBefore
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore
 * @param {Element} el
 * @param {Element} reference
 * @return {Element|null}
 */
const insertBefore = (el, reference) => {
  let $parent

  if (!isDOM(el)) {
    return null
  }

  $parent = reference.parentNode

  if (!$parent) {
    return null
  }

  return $parent.insertBefore(el, reference)
}

export default insertBefore
