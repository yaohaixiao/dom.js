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
  const size = _getElementSizes(el)

  if (!size) {
    return null
  }

  return {
    offsetHeight: size.offsetHeight,
    offsetWidth: size.offsetWidth,
    innerHeight: innerHeight(el),
    innerWidth: innerWidth(el),
    outerHeight: outerHeight(el),
    outerWidth: outerWidth(el),
    margin: {
      top: size.marginTopHeight,
      right: size.marginRightWidth,
      bottom: size.marginBottomHeight,
      left: size.marginLeftWidth
    },
    border: {
      top: size.borderTopHeight,
      right: size.borderRightWidth,
      bottom: size.borderBottomHeight,
      left: size.borderLeftWidth
    },
    padding: {
      top: size.paddingTopHeight,
      right: size.paddingRightWidth,
      bottom: size.paddingBottomHeight,
      left: size.paddingLeftWidth
    },
    rect: size.rect
  }
}

export default sizes
