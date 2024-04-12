import isElement from './isElement'

/**
 * 判断 DOM 元素是为 table 列表类的元素
 * ========================================================================
 * @method isTableElement
 * @since 1.7.0
 * @see https://github.com/floating-ui/floating-ui
 * @param el
 * @return {boolean}
 */
const isTableElement = (el) => {
  return (
    isElement(el) &&
    ['table', 'thead', 'tbody', 'tfoot', 'tr', 'td', 'th'].includes(el.tagName)
  )
}

export default isTableElement
