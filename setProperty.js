/**
 * 为一个声明了 CSS 样式的对象设置一个新的值。
 * ========================================================================
 * @method setProperty
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/CSSStyleDeclaration/setProperty
 * @param {String} prop
 * @param {String} value
 */
const setProperty = (prop, value) => {
  const documentElement = document.documentElement
  documentElement.style.setProperty(prop, value)
}

export default setProperty
