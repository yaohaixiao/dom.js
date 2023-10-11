import getEl from './getEl'

/**
 * 获取页面中第一个与 selector 匹配的 DOM 节点
 * ========================================================================
 * @method findA
 * @param {String} selector
 * @return {Element|null}
 */
const find = (selector) => {
  return getEl(selector)
}

export default find
