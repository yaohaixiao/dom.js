import getEl from './getEl'

/**
 * 获取页面中所有与 selector 匹配的 DOM 节点
 * ========================================================================
 * @method findAll
 * @since 0.4.0
 * @param {String} selector
 * @return {NodeListOf<*>|*}
 */
const findAll = (selector) => {
  return getEl(selector, true)
}

export default findAll
