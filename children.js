import siblings from './siblings'

/**
 * 获取 DOM 元素下所有 HTMKLElement 类型的 DOM 元素
 * ========================================================================
 * @method childern
 * @param {HTMLElement} el
 * @return {*[]}
 */
const children = (el) => {
  return siblings(el.firstChild)
}

export default children
