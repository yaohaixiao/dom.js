import isUndefined from './utils/types/isUndefined'
import getProperty from './getProperty'
import setProperty from './setProperty'

/**
 * ========================================================================
 * @method prop
 * @param prop
 * @param value
 * @return {String|void}
 */
const prop = (prop, value) => {
  if (!isUndefined(value)) {
    return setProperty(prop, value)
  } else {
    return getProperty(prop)
  }
}

export default prop
