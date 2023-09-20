import isElement from './utils/types/isElement'
import isHTML from './utils/types/isHTML'

/**
 * 来将指定的文本解析为 Element 元素，并将结果节点插入元素内部的最后一个子节点之后。
 * ========================================================================
 * @method insertHTMLBeforeEnd
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentHTML
 * @param {HTMLElement|String} el
 * @param {String} html
 *
 * @example
 * insertHTMLBefore(document.getElementById('myId'), '<p>before</p>');
 * // <p>before</p> <div id="myId">...</div>
 */
const insertHTMLBeforeEnd = (el, html) => {
  let $el

  if (!el || !isHTML(html)) {
    return false
  }

  $el = isElement(el) ? el : document.querySelector(el)

  if (!$el) {
    return false
  }

  $el.insertAdjacentHTML('beforeend', html)
}

export default insertHTMLBeforeEnd
