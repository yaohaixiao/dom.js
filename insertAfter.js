import isElement from './utils/types/isElement'
import getNextSibling from './getNextSibling'

/**
 * 在参考节点之后插入一个拥有指定父节点的子节点。函数返回被插入过的子节点；
 * 当 newNode 是 DocumentFragment 时，返回空 DocumentFragment。
 * ========================================================================
 * @method insertAfter
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/insertBefore
 * @param {Element} el
 * @param {Element} reference
 * @return {Element|null}
 */
const insertAfter = (el, reference) => {
  const $parent = reference.parentNode
  let $nextSibling

  if (
    !el ||
    !isElement(el) ||
    !reference ||
    !isElement(reference) ||
    !$parent
  ) {
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
