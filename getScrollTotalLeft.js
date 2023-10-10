import isElement from './isElement'
import getScrollLeft from './getScrollLeft'
import getStyle from './getStyle'

/**
 * 获取 DOM 节点预期所有父节点的横向滚动距离
 * ========================================================================
 * @method getScrollTotalLeft
 * @return {Number}
 */
const getScrollTotalLeft = (() => {
  const $root = window
  let scrollX = []

  return (el) => {
    let $parent

    if (!isElement(el)) {
      return scrollX
    }

    $parent = el.parentNode

    if (!$parent) {
      return scrollX
    }

    if ($parent === $root.document) {
      const $body = document.body || document.documentElement
      const position = getScrollLeft($body)
      const x = [...scrollX]

      x.push(position.x)

      scrollX = []

      return x
    }

    if (
      ['scroll', 'auto'].indexOf(getStyle($parent, 'overflow')) !== -1 ||
      ['scroll', 'auto'].indexOf(getStyle($parent, 'overflow-x')) !== -1
    ) {
      const position = getScrollLeft($parent)

      scrollX.push(position.x)
    }

    return getScrollTotalLeft($parent)
  }
})()

export default getScrollTotalLeft
