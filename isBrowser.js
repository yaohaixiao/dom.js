/**
 * 检测当前运行环境是否为浏览器
 * ========================================================================
 * @method isBrowser
 * @return {Boolean}
 */
const isBrowser = () => {
  return ![typeof window, typeof document].includes('undefined')
}

export default isBrowser
