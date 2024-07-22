export default createAndDownloadFile;
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
declare function createAndDownloadFile(fileName: string, content: string | Blob): void;
