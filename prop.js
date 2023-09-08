import getProperty from './getProperty'
import setProperty from './setProperty'
import isUndefined from './utils/types/isUndefined'

const prop = (prop, value) => {
  if (!isUndefined(value)) {
    return setProperty(prop, value)
  } else {
    return getProperty(prop)
  }
}

export default prop
