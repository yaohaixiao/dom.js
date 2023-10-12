import getEl from './getEl'

/**
 * 获取页面中第一个与 selector 匹配的 DOM 节点
 * ========================================================================
 * @method find
 * @since 0.4.0
 * @param {String} selector
 * @return {HTMLElement|null}
 */
const find = (selector) => {
  return getEl(selector)
}

export default find
