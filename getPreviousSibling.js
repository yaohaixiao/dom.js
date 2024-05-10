import isElement from './isElement'
import isText from './isText'

/**
 * 获取 DOM 元素的前一个邻居元素节点
 * ========================================================================
 * @method getPreviousSibling
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/previousElementSibling
 * @param {HTMLElement|Text} el
 * @param {HTMLElement} el.previousElementSibling
 * @param {ChildNode} el.previousSibling
 * @param {Boolean} [isElementSibling]
 * @return {HTMLElement|null}
 */
const getPreviousSibling = (el, isElementSibling = true) => {
  if (!isText(el) && !isElement(el)) {
    return null
  }

  return isElementSibling ? el.previousElementSibling : el.previousSibling
}

export default getPreviousSibling
