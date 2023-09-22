import isElement from './utils/types/isElement'
import getScrollTop from './getScrollTop'
import getStyle from './getStyle'

/**
 * 获取 DOM 节点预期所有父节点的纵向滚动距离
 * ====================================================
 * @method getScrollTotalTop
 * @return {Number}
 */
const getScrollTotalTop = (() => {
  const $root = window
  let scrollY = []

  return (el) => {
    let $parent

    if (!isElement(el)) {
      return scrollY
    }

    $parent = el.parentNode

    if (!$parent) {
      return scrollY
    }

    if ($parent === $root.document) {
      const $body = document.body || document.documentElement
      const position = getScrollTop($body)
      const y = [...scrollY]

      y.push(position.y)

      scrollY = []

      return y
    }

    if (
      ['scroll', 'auto'].indexOf(getStyle($parent, 'overflow')) !== -1 ||
      ['scroll', 'auto'].indexOf(getStyle($parent, 'overflow-y')) !== -1
    ) {
      const position = getScrollTop($parent)

      scrollY.push(position.y)
    }

    return getScrollTotalTop($parent)
  }
})()

export default getScrollTotalTop
