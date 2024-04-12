/**
 * 随机生成 HEX 格式颜色代码
 * ========================================================================
 * @method randomHexColor
 * @since 1.7.0
 * @returns {string}
 */
const randomHexColor = () => {
  let hex = (Math.random() * 0xfffff * 1000000).toString(16)
  return '#' + hex.slice(0, 6)
}

export default randomHexColor
