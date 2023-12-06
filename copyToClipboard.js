import createElement from './createElement'

/**
 * 复制文本到粘贴板
 * =============================================================
 * @method copyToClipboard
 * @since 1.4.0
 * @param {String} str - 要复制的文本
 */
const copyToClipboard = (str) => {
  const el = createElement('textarea', {
    value: str,
    readonly: 'position:absolute;left:-99999px;',
    style: ''
  })
  const $body = document.body
  let selected

  $body.appendChild(el)
  selected =
    document.getSelection().rangeCount > 0
      ? document.getSelection().getRangeAt(0)
      : false
  el.select()
  document.execCommand('copy')
  $body.removeChild(el)

  if (selected) {
    document.getSelection().removeAllRanges()
    document.getSelection().addRange(selected)
  }
}

export default copyToClipboard
