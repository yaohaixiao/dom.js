import isUndefined from './utils/types/isUndefined'
import getProperty from './getProperty'
import setProperty from './setProperty'

/**
 * 设置或获取 CSS 样式变量
 * ========================================================================
 * @method prop
 * @param {String} prop
 * @param {String} [value]
 * @return {String|*}
 */
const prop = (prop, value) => {
  if (!isUndefined(value)) {
    setProperty(prop, value)
  } else {
    return getProperty(prop)
  }
}

export default prop
