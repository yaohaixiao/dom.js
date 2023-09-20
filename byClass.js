import isElement from './utils/types/isElement'

/**
 * 返回与指定的类选择器组匹配的文档中的元素列表 (使用深度优先的先序遍历文档的节点)。
 * 返回的对象是 NodeList 。
 * ========================================================================
 * @method byClass
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelectorAll
 * @param {String} className
 * @param {HTMLElement} [el]
 * @return {NodeListOf<Element>}
 */
const byClass = (className, el) => {
  const selector = className.replace(/^./i, '')
  const $el = isElement(el) ? el : document
  return $el.querySelectorAll(`.${selector}`)
}

export default byClass
