import isElement from './utils/isElement'
import getScrollY from './getScrolly'
import getStyle from './getStyle'

/**
 * 获取某个节点所有父节点的滚动位置
 * ====================================================
 * @method getScrollTotalY
 */
const getScrollTotalY = (() => {
  const $root = window
  let scrollY = []

  return (el) => {
    let $parent

    if(!isElement(el)) {
      return scrollY
    }

    $parent = el.parentNode

    if (!$parent) {
      return scrollY
    }

    if ($parent === $root.document) {
      const $body = document.body || document.documentElement
      const position = getScrollY($body)
      const y = [...scrollY]

      y.push(position.y)

      scrollY = []

      return y
    }

    if (
      ['scroll', 'auto'].indexOf(getStyle($parent, 'overflow')) !== -1 ||
      ['scroll', 'auto'].indexOf(getStyle($parent, 'overflow-y')) !== -1
    ) {
      const position = getScrollY($parent)

      scrollY.push(position.y)
    }

    return getScrollTotalY($parent)
  }
})()

export default getScrollTotalY
