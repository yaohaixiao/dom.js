import _insertAdjacentHTML from './_insertAdjacentHTML'

/**
 * 在指定元素的开头插入HTML字符串。
 * ========================================================================
 * @method insertHTMLBeforeBegin
 * @param {HTMLElement|String} el
 * @param {String} str
 * @param {Boolean} [dangerouslyUseHTMLString]
 * @return {Element|null}
 */
const insertHTMLBeforeBegin = (el, str, dangerouslyUseHTMLString = true) => {
  return _insertAdjacentHTML(el, 'beforebegin', str, dangerouslyUseHTMLString)
}

export default insertHTMLBeforeBegin
