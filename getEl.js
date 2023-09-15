import isElement from './utils/types/isElement'
import isBoolean from './utils/types/isBoolean'

/**
 * 查询单个或者 DOM 节点
 * ========================================================================
 * @method  getEl
 * @param {String} selector
 * @param {HTMLElement|Boolean} [el]
 * @param {Boolean} [multiple]
 * @return {NodeListOf<*>|*}
 */
const getEl = (selector, el, multiple = false) => {
  const $el = isElement(el) ? el : document
  let isMultiple = multiple

  if(isBoolean(el)){
    isMultiple = el
  }

  if(isMultiple) {
    return $el.querySelectorAll(selector)
  }

  return $el.querySelector(selector)
}

export default getEl
