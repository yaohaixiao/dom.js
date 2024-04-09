import isHTML from './utils/types/isHTML'
import isCollection from './isCollection'
import isElement from './isElement'
import isText from './isText'
import html from './html'

/**
 * 创建文档碎片
 * ========================================================================
 * @method fragment
 * @since 1.7.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Document/createDocumentFragment
 * @param {String|HTMLElement|HTMLCollection|Text} [innerContent]
 * @returns {DocumentFragment}
 */
const fragment = (innerContent) => {
  const $fragment = document.createDocumentFragment()
  let $children = []
  let collection = []

  if (isHTML(innerContent)) {
    $children = [html(innerContent)]
  } else if (isElement(innerContent) || isText(innerContent)) {
    $children = [innerContent]
  } else if (isCollection(innerContent)) {
    collection = [...innerContent]
    collection.forEach((child) => {
      $children.push(child)
    })
  }

  if ($children.length > 0) {
    $children.forEach((child) => {
      $children.push(child)
    })
  }

  return $fragment
}

export default fragment
