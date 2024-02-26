import getWindow from './getWindow'

/**
 * 检测指定对象是否为 Node （接口）实例
 * ========================================================================
 * @method isNode
 * @since 1.6.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node
 * @param {Node} node
 * @return {boolean}
 */
const isNode = (node) => {
  return node instanceof getWindow(node).Node
}

export default isNode
