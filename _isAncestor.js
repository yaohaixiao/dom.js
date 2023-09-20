/**
 * 判断某个 DOM 元素是否为另一个 DOM 节点的祖先节点
 * ========================================================================
 * @method _isAncestor
 * @param {HTMLElement} ancestor
 * @param {HTMLElement} descendent
 * @return {boolean}
 * @private
 */
const _isAncestor = (ancestor, descendent) => {
  let result = false

  if (!ancestor || !descendent || !ancestor.nodeType || !descendent.nodeType) {
    return result
  }

  if (ancestor.contains && ancestor !== descendent) {
    result = ancestor.contains(descendent)
  } else if (ancestor.compareDocumentPosition) {
    result = !!(ancestor.compareDocumentPosition(descendent) & 16)
  }

  return result
}

export default _isAncestor
