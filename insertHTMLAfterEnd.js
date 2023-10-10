import isHTML from './utils/types/isHTML'
import isElement from './isElement'

/**
 * 将指定的文本解析为 Element 元素，并将结果节点插入到 DOM 树中的指定 DOM 节点之后。
 * ========================================================================
 * @method insertHTMLAfterEnd
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentHTML
 * @param {HTMLElement|String} el
 * @param {String} html
 * @example
 * insertAfter(document.getElementById('myId'), '<p>after</p>');
 * // <div id="myId">...</div> <p>after</p>
 */
const insertHTMLAfterEnd = (el, html) => {
  let $el

  if (!el || !isHTML(html)) {
    return false
  }

  $el = isElement(el) ? el : document.querySelector(el)

  if (!$el) {
    return false
  }

  $el.insertAdjacentHTML('afterend', html)
}

export default insertHTMLAfterEnd
