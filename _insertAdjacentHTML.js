import isHTML from './utils/types/isHTML'
import isElement from './isElement'
import getEl from './getEl'
import stripScripts from './utils/string/stripScripts'
import html from './html'
import encodeHTML from './utils/string/encodeHTML'
import text from './text'
import isText from './isText'

/**
 * 方法将指定的文本解析为 Element 元素，并将结果节点插入到 DOM 树中的指定位置。它不会
 * 重新解析它正在使用的元素，因此它不会破坏元素内的现有元素。这避免了额外的序列化步骤，
 * 使其比直接使用 innerHTML 操作更快。
 * ========================================================================
 * @method _insertAdjacentHTML
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/insertAdjacentHTML
 * @param {HTMLElement|String} el
 * @param {String} position - 一个 DOMString，表示插入内容相对于元素的位置，并且必须是以下字符串之一：
 *                            'beforebegin'：元素自身的前面。
 *                            'afterbegin'：插入元素内部的第一个子节点之前。
 *                            'beforeend'：插入元素内部的最后一个子节点之后。
 *                            'afterend'：元素自身的后面。
 * @param {String} str
 * @param {Boolean} [dangerouslyUseHTMLString]
 * @return {Element|Text|null}
 * @private
 */
const _insertAdjacentHTML = (
  el,
  position,
  str,
  dangerouslyUseHTMLString = true
) => {
  const POSITIONS = ['beforebegin', 'afterbegin', 'beforeend', 'afterend']
  let insertHTML = str
  let $el
  let $parent

  if (!el || POSITIONS.indexOf(position) === -1 || !isHTML(insertHTML)) {
    return null
  }

  $el = isElement(el) ? el : getEl(el)

  if (!$el) {
    return null
  }

  // 'afterend' 和 'beforebegin' 位置，仅在 el 节点在树中且节点具有一个 parent 元素时工作
  /* istanbul ignore else */
  if (position === 'beforebegin' || position === 'afterend') {
    $parent = $el.parentNode

    /* istanbul ignore else */
    if (!$parent) {
      return null
    }
  }

  if (dangerouslyUseHTMLString) {
    insertHTML = stripScripts(insertHTML)
    $el.insertAdjacentHTML(position, insertHTML)
    return html(insertHTML)
  } else {
    insertHTML = encodeHTML(insertHTML)
    $el.insertAdjacentText(position, insertHTML)
    return text(insertHTML)
  }
}

export default _insertAdjacentHTML
