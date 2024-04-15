/**
 * 获取页面中选中的文本内容
 * ========================================================================
 * @method getSelectedText
 * @since 1.7.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Window/getSelection
 * @returns {String}
 */
const getSelectedText = () => {
  return window.getSelection().toString()
}

export default getSelectedText
