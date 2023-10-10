import isElement from './isElement'
import isDOM from './isDOM'
import getNextSibling from './getNextSibling'

/**
 * 在参考节点之后插入一个拥有指定父节点的子节点。函数返回被插入过的子节点；
 * 当 newNode 是 DocumentFragment 时，返回空 DocumentFragment。
 * ========================================================================
 * @method insertAfter
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore
 * @param {Element} el
 * @param {HTMLElement} reference
 * @return {Element|null}
 */
const insertAfter = (el, reference) => {
  let $parent
  let $nextSibling

  if (!isDOM(el) || !isElement(reference)) {
    return null
  }

  $parent = reference.parentNode

  if (!$parent) {
    return null
  }

  $nextSibling = getNextSibling(reference)

  if ($nextSibling) {
    return $parent.insertBefore(el, $nextSibling)
  } else {
    return $parent.appendChild(el)
  }
}

export default insertAfter
