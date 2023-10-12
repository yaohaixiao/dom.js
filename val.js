import isUndefined from './utils/types/isUndefined'
import getValue from './getValue'
import setValue from './setValue'

const val = (el, value) => {
  if (!isUndefined(value)) {
    setValue(el, value)
  } else {
    return getValue(el)
  }
}

export default val
