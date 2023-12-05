import createElement from './createElement'

/**
 * （通过文本）创建二进制的文件并下载文件
 * ====================================================
 * @method createAndDownloadFile
 * @since 1.4.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Blob/Blob
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/URL/createObjectURL_static
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/URL/revokeObjectURL_static
 * @param {String} fileName 文件名
 * @param {String|Blob} content  文件内容
 */
const createAndDownloadFile = (fileName, content) => {
  const $blob = new Blob([content])
  const $anchor = createElement('a', {
    download: fileName,
    href: URL.createObjectURL($blob)
  })

  $anchor.click()
  URL.revokeObjectURL($blob)
}

export default createAndDownloadFile
