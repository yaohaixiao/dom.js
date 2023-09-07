import isElement from './utils/types/isElement'
import getScrollLeft from './getScrollLeft'
import getStyle from './getStyle'

/**
 * 获取某个节点所有父节点的滚动位置
 * ====================================================
 * @method getScrollTotalLeft
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
