import isNode from './isNode'

/**
 * 获取 Node 对象（DOM 元素）所在的文档的 documentElement 对象
 * ========================================================================
 * @method getDocument
 * @since 1.6.0
 * @param node
 * @return {HTMLElement}
 */
const getDocument = (node) => {
  return (
    (isNode(node) ? node.ownerDocument : node.document) || window.document
  ).documentElement
}

export default getDocument
