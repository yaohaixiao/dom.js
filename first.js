/**
 * 返回指定 DOM 节点第一个（元素）子节点
 * ========================================================================
 * @method first
 * @since 1.12.0
 * @param {HTMLElement} el
 * @param {Boolean} [isElement = true]
 * @return {Element|*}
 */
const first = (el, isElement = true) => {
  return isElement ? el.firstElementChild : el.firstChild
}

export default first
