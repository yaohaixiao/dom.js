import trim from './utils/string/trim'
import isElement from './isElement'
import hasClass from './hasClass'

/**
 * 移除 DOM 节点的 className 样式
 * ========================================================================
 * @method removeClass
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/remove
 * @param {HTMLElement} el - DOM 节点
 * @param {String} className - 样式名称
 */
const removeClass = (el, className) => {
  let allClass
  let classList

  if (!isElement(el) || !className) {
    return false
  }

  allClass = el.className

  if (!allClass || !hasClass(el, className)) {
    return false
  }

  classList = el.classList

  if (classList?.remove) {
    classList.remove(className)
  } else {
    allClass = trim(allClass.replace(className, ''))
    el.className = allClass
  }
}

export default removeClass
