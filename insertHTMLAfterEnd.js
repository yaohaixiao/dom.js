import _insertAdjacentHTML from './_insertAdjacentHTML'

/**
 * 将指定的文本解析为 Element 元素，并将结果节点插入到 DOM 树中的指定 DOM 节点之后。
 * ========================================================================
 * @method insertHTMLAfterEnd
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentHTML
 * @param {HTMLElement|String} el
 * @param {String} str
 * @param {Boolean} [dangerouslyUseHTMLString]
 * @return {Element|null}
 */
const insertHTMLAfterEnd = (el, str, dangerouslyUseHTMLString = true) => {
  return _insertAdjacentHTML(el, 'afterend', str, dangerouslyUseHTMLString)
}

export default insertHTMLAfterEnd
