import isElement from './utils/isElement'
import getStyle from './getStyle'

const getScrollParent = (el) => {
  const $root = window
  const $parent = el.parentNode

  if(!isElement(el)) {
    return null
  }

  if (!$parent) {
    return el
  }

  if ($parent === $root.document) {
    if ($root.document.body.scrollTop || $root.document.body.scrollLeft) {
      return $root.document.body
    } else {
      return $root.document.documentElement
    }
  }

  // Firefox want us to check `-x` and `-y` variations as well
  if (
    ['scroll', 'auto'].indexOf(getStyle($parent, 'overflow')) !== -1 ||
    ['scroll', 'auto'].indexOf(getStyle($parent, 'overflow-x')) !== -1 ||
    ['scroll', 'auto'].indexOf(getStyle($parent, 'overflow-y')) !== -1
  ) {
    return $parent
  }

  return getScrollParent(el.parentNode)
}

export default getScrollParent
