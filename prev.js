import getPreviousSibling from './getPreviousSibling'

/**
 * 获取 DOM 元素的前一个邻居元素节点
 * ========================================================================
 * @method prev
 * @alias getPreviousSibling
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/previousElementSibling
 * @param {HTMLElement} el
 * @return {Element|null}
 */
const prev = (el) => {
  return getPreviousSibling(el)
}

export default prev
