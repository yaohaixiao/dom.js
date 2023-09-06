import isElement from './utils/isElement'

/**
 * 在指定元素的开头插入HTML字符串。
 * ========================================================================
 * @param {HTMLElement|String} el
 * @param {String} html
 *
 * @example
 * insertHTMLBefore(document.getElementById('myId'), '<p>before</p>');
 * // <p>before</p> <div id="myId">...</div>
 */
const insertHTMLBefore = (el, html) => {
  let $el

  if (!el || !html) {
    return false
  }

  $el = isElement(el) ? el : document.querySelector(el)

  if (!$el) {
    return false
  }

  $el.insertAdjacentHTML('beforebegin', html)
}

export default insertHTMLBefore
