import _getElementSizes from './_getElementSizes'
import innerHeight from './innerHeight'
import innerWidth from './innerWidth'
import outerHeight from './outerHeight'
import outerWidth from './outerWidth'

/**
 * 获取 DOM 节点的相关尺寸信息，返回相关尺寸数据的对象。
 * ========================================================================
 * @method sizes
 * @param {HTMLElement} el
 * @return {Object|Null}
 */
const sizes = (el) => {
  const elSizes = _getElementSizes(el)

  if (!elSizes) {
    return null
  }

  return {
    offsetHeight: elSizes.offsetHeight,
    offsetWidth: elSizes.offsetWidth,
    innerHeight: innerHeight(el),
    innerWidth: innerWidth(el),
    outerHeight: outerHeight(el),
    outerWidth: outerWidth(el),
    margin: {
      top: elSizes.marginTop,
      right: elSizes.marginRight,
      bottom: elSizes.marginBottom,
      left: elSizes.marginLeft
    },
    border: {
      top: elSizes.borderTop,
      right: elSizes.borderRight,
      bottom: elSizes.borderBottom,
      left: elSizes.borderLeft
    },
    padding: {
      top: elSizes.paddingTop,
      right: elSizes.paddingRight,
      bottom: elSizes.paddingBottom,
      left: elSizes.paddingLeft
    },
    rect: elSizes.rect
  }
}

export default sizes
