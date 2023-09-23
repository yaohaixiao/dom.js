import isElement from './utils/types/isElement'
import isString from './utils/types/isString'

/**
 * 返回文档中与指定 id 选择器匹配 Element对象
 * ========================================================================
 * @methods byId
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Document/querySelector
 * @param {String} id
 * @param {HTMLElement} [el]
 * @return {Element}
 */
const byId = (id, el) => {
  let selector
  let $el

  if (!isString(id)) {
    return null
  }

  selector = id.replace(/^#/i, '')
  $el = isElement(el) ? el : document

  return $el.querySelector(`#${selector}`)
}

export default byId
