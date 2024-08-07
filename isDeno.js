/**
 * 检测当前运行环境是否为 Done 环境
 * ========================================================================
 * @method isDeno
 * @return {boolean}
 */
const isDeno = () => {
  try {
    /* eslint-disable */
    return Deno && Deno?.core !== 'undefined'
  } catch (e) {
    return false
  }
}

export default isDeno
