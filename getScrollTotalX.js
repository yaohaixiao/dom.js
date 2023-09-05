import isElement from './utils/isElement'
import getScrollX from './getScrollX'
import getStyle from './getStyle'

/**
 * 获取某个节点所有父节点的滚动位置
 * ====================================================
 * @method getScrollTotalX
 */
const getScrollTotalX = (() => {
  const $root = window
  let scrollX = []

  return (el) => {
    let $parent

    if(!isElement(el)) {
      return scrollX
    }

    $parent = el.parentNode

    if (!$parent) {
      return scrollX
    }

    if ($parent === $root.document) {
      const $body = document.body || document.documentElement
      const position = getScrollX($body)
      const x = [...scrollX]

      x.push(position.x)

      scrollX = []

      return x
    }

    if (
      ['scroll', 'auto'].indexOf(getStyle($parent, 'overflow')) !== -1 ||
      ['scroll', 'auto'].indexOf(getStyle($parent, 'overflow-x')) !== -1
    ) {
      const position = getScrollX($parent)

      scrollX.push(position.x)
    }

    return getScrollTotalX($parent)
  }
})()

export default getScrollTotalX
