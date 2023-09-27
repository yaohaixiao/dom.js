import isElement from './utils/types/isElement'
import isString from './utils/types/isString'
import isArray from './utils/types/isArray'
import getSiblings from './getSiblings'
import getEl from './getEl'

/**
 * 获取 DOM 元素在其父节点中的索引值
 * ========================================================================
 * @method index
 * @param {HTMLElement|String} el
 * @param {HTMLElement} [ancestor]
 * @return {number}
 */
const index = function (el, ancestor) {
  /**
   * 返回 target 元素在 siblings 数组的索引值
   * @method indexOf
   * @param {Array} siblings
   * @param {HTMLElement} target
   * @return {number}
   */
  const indexOf = (siblings, target) => {
    let index = -1

    if (!isArray(siblings) || siblings.length < 1 || !isElement(target)) {
      return index
    }

    siblings.forEach((sibling, j) => {
      if (sibling === target) {
        index = j
      }
    })

    return index
  }
  let $el

  if (isElement(el)) {
    $el = el
  } else if (isString(el)) {
    $el = getEl(el, ancestor)
  }

  return indexOf(getSiblings($el, true), $el)
}

export default index
