import isTextNode from './utils/types/isTextNode'

/**
 * 判断 DOM 元素是否未文本节点
 * ========================================================================
 * @method isText
 * @param {HTMLElement} el
 * @return {Boolean}
 */
const isText = (el) => {
  return isTextNode(el)
}

export default isText
