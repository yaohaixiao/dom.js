import isElement from './isElement'
import hasClass from './hasClass'

/**
 * 给 DOM 节点添加名为 className 的样式
 * ========================================================================
 * @method addClass
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/classList
 * @see https://developer.mozilla.org/en-US/docs/Web/API/DOMTokenList/add
 * @param {HTMLElement} el - DOM 节点
 * @param {String} className - 样式名称
 * @returns {Boolean}
 */
const addClass = (el, className) => {
  let classList
  let allClass

  if (!isElement(el) || hasClass(el, className)) {
    return false
  }

  classList = el.classList

  if (classList?.add) {
    classList.add(className)
  } else {
    allClass = el.className
    allClass += allClass.length > 0 ? ' ' + className : className
    el.className = allClass
  }
}

export default addClass
