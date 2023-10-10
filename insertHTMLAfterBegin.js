import _insertAdjacentHTML from './_insertAdjacentHTML'

/**
 * 将指定的文本解析为 Element 元素，并将结果节点插入 el 元素内部的第一个子节点之前。
 * ========================================================================
 * @method insertHTMLAfterBegin
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentHTML
 * @param {HTMLElement|String} el
 * @param {String} str
 * @param {Boolean} [dangerouslyUseHTMLString]
 * @return {Element|null}
 *
 * @example
 * insertAfter(document.getElementById('myId'), '<p>after</p>');
 * // <div id="myId">...</div> <p>after</p>
 */
const insertHTMLAfterBegin = (el, str, dangerouslyUseHTMLString = true) => {
  return _insertAdjacentHTML(el, 'afterbegin', str, dangerouslyUseHTMLString)
}

export default insertHTMLAfterBegin
