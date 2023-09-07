import isElement from './utils/types/isElement'

/**
 * 在指定元素的末尾插入HTML字符串。
 * ========================================================================
 * @param {HTMLElement|String} el
 * @param {String} html
 *
 * @example
 * insertAfter(document.getElementById('myId'), '<p>after</p>');
 * // <div id="myId">...</div> <p>after</p>
 */
const insertHTMLAfter = (el, html) => {
  let $el

  if (!el || !html) {
    return false
  }

  $el = isElement(el) ? el : document.querySelector(el)

  if (!$el) {
    return false
  }

  $el.insertAdjacentHTML('afterend', html)
}

export default insertHTMLAfter
