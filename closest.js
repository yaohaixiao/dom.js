import matches from './matches'
import getHostOrParent from './getHostOrParent'

/**
 * 获取 base 元素父元素最近的包含 selector 选择器的元素
 * ========================================================================
 * @method closest
 * @param {HTMLElement} el - （必须）DOM 元素
 * @param {String} selector - （必须）DOM 元素的选择其
 * @param {HTMLElement} [ctx] - （可选）比对的 DOM 元素
 * @param {Boolean} [includeCTX] - （可选）是否包含 context DOM 元素
 * @returns {HTMLElement|null} - 返回最接近的 DOM 元素
 */
const closest = (el, selector, ctx, includeCTX) => {
  const context = ctx || document

  if (!el) {
    return null
  }

  do {
    /* istanbul ignore else */
    if (
      (selector != null &&
        (selector.startsWith('>')
          ? el.parentNode === context && matches(el, selector)
          : matches(el, selector))) ||
      (includeCTX && el === context)
    ) {
      return el
    }

    /* istanbul ignore else */
    if (el === context) {
      break
    }

    /* jshint boss:true */
  } while ((el = getHostOrParent(el)))
}

export default closest
