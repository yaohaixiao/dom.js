import isElement from './isElement'
import siblings from './siblings'

/**
 * 获取 DOM 元素下所有 HTMKLElement 类型的 DOM 元素
 * ========================================================================
 * @method childern
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/firstElementChild
 * @param {HTMLElement} el
 * @return {*[]}
 */
const children = (el) => {
  if (!isElement(el)) {
    return []
  }

  return siblings(el.firstElementChild, true)
}

export default children
