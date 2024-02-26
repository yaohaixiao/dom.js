import isWindow from './isWindow'

/**
 * 获取 window 对象
 * ========================================================================
 * @method getWindow
 * @since 1.6.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/ownerDocument
 * @param {Node|Window} node
 * @return {*|Window}
 */
const getWindow = (node) => {
  if (node === null) {
    return window
  }

  if (!isWindow(node)) {
    const ownerDocument = node.ownerDocument
    return ownerDocument ? ownerDocument.defaultView || window : window
  }

  return node
}

export default getWindow
