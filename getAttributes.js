import isElement from './utils/types/isElement'
import isArray from './utils/types/isArray'
import getAttribute from './getAttribute'

const getAttributes = (el, props = []) => {
  const attrs = {}
  let keys = [...props]

  if (!isElement(el)) {
    return null
  }

  if (!isArray(keys) || keys.length < 1) {
    keys = el.getAttributeNames()
  }

  keys.forEach((key) => {
    const value = getAttribute(el, key)

    if (value) {
      attrs[key] = value
    }
  })

  return attrs
}

export default getAttributes
