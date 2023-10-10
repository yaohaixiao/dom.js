import isElement from './isElement'

/**
 * 检测 DOM 节点是否包含名为 className 的样式
 * ========================================================================
 * @method hasClass
 * @see https://developer.mozilla.org/en-US/docs/Web/API/Element/classList
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/contains
 * @param {HTMLElement} el - DOM 节点
 * @param {String} className - 样式名称
 * @returns {Boolean}
 */
const hasClass = (el, className) => {
  let pattern
  let allClass
  let classList

  if (!isElement(el) || !className) {
    return false
  }

  pattern = new RegExp('(\\s|^)' + className + '(\\s|$)')
  allClass = el.className

  if (!allClass) {
    return false
  }

  classList = el.classList

  if (classList?.contains) {
    return el.classList.contains(className)
  }

  return !!pattern.exec(allClass)
}

export default hasClass
