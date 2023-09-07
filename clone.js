import isElement from './utils/types/isElement'

/**
 * 克隆节点
 * ========================================================================
 * @method clone
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Node/cloneNode
 * @param {HTMLElement|Text|HTMLFrameElement} el
 * @param {Boolean} deep - 受否深度拷贝（默认值：false）。
 *                         false - 仅拷贝 DOM 本身；
 *                         true - 拷贝 DOM 以及所有子节点；
 * @return {ActiveX.IXMLDOMNode|Node|null}
 */
const clone = (el, deep = false) => {
  if (!isElement(el)) {
    return null
  }

  return el.cloneNode(deep)
}

export default clone
