/**
 * 检测是否为 window 对象
 * ========================================================================
 * @method isWindow
 * @since 1.6.0
 * @param {Object} o
 * @return {boolean}
 */
const isWindow = (o) => {
  return (
    o != null &&
    o === o.window &&
    o.document &&
    o.location &&
    o.alert &&
    o.setInterval
  )
}

export default isWindow
