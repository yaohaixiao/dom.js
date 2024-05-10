import isElement from './isElement'
import isText from './isText'

/**
 * 获取 DOM 元素的后一个邻居元素节点
 * ========================================================================
 * @method getNextSibling
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/nextElementSibling
 * @param {HTMLElement|Text} el
 * @param {HTMLElement} el.nextElementSibling
 * @param {ChildNode} el.nextSibling
 * @param {Boolean} [isElementSibling]
 * @return {HTMLElement|null}
 */
const getNextSibling = (el, isElementSibling = true) => {
  if (!isText(el) && !isElement(el)) {
    return null
  }

  return isElementSibling ? el.nextElementSibling : el.nextSibling
}

export default getNextSibling
