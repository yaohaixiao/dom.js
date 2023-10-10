import isObject from './utils/types/isObject'
import isString from './utils/types/isString'
import isArray from './utils/types/isArray'
import isDOM from './isDOM'
import text from './text'
import setAttributes from './setAttributes'

/**
 * 创建 DOM 节点，并添加属性和子节点
 * ========================================================================
 * @method createElement
 * @param {String} tagName - 标签名称
 * @param {Object|Array|HTMLElement|DocumentFragment|String} [attrs] - 属性对象或者子节点
 * @param {Array|HTMLElement|DocumentFragment|String} [children] - 子节点数组
 * @returns {HTMLElement|null}
 */
const createElement = (tagName, attrs, children) => {
  const $fragment = document.createDocumentFragment()

  if (!tagName) {
    return null
  }

  const $el = document.createElement(tagName)
  const isValidChild = (child) => {
    return isDOM(child) || isString(child)
  }
  const append = (child) => {
    let $child

    if (!isValidChild(child)) {
      return false
    }

    if (isDOM(child)) {
      $child = child
    } else {
      $child = text(child)
    }

    $fragment.appendChild($child)
  }

  if (isString(attrs)) {
    append(text(attrs))
  } else if (isDOM(attrs)) {
    append(attrs)
  } else if (isArray(attrs) && attrs.every((attr) => isValidChild(attr))) {
    attrs.forEach((child) => {
      append(child)
    })
  } else if (isObject(attrs) && !isDOM(attrs)) {
    setAttributes($el, attrs)
  }

  if (isArray(children)) {
    children.forEach((child) => {
      append(child)
    })
  } else {
    append(children)
  }

  $el.appendChild($fragment)

  return $el
}

export default createElement
