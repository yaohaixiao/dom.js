/**
 * 返回指定 DOM 节点最后一个（元素）子节点
 * ========================================================================
 * @method last
 * @since 1.12.0
 * @param {HTMLElement} el
 * @param {Boolean} [isElement = true]
 * @return {Element|*}
 */
const last = (el, isElement = true) => {
  return isElement ? el.lastElementChild : el.lastChild
}

export default last
