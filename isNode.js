/**
 * 检测当前运行环境是否为 Node.js 环境
 * ========================================================================
 * @method isNode
 * @return {boolean}
 */
const isNode = () => {
  return (
    typeof process !== 'undefined' &&
    !!process.versions &&
    !!process.versions.node
  )
}

export default isNode
