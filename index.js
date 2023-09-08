import isElement from './utils/types/isElement'
import isString from './utils/types/isString'
import isArray from './utils/types/isArray'
import getSiblings from './getSiblings'

const index = function (ancestor, descendent) {
  const indexOf = (list, el) => {
    let index = -1

    if (!isArray(list)) {
      return index
    }

    list.forEach((item, i) => {
      if (item === el) {
        index = i
      }
    })

    return index
  }

  let i = -1
  let list

  if (!descendent) {
    if (isString(el)) {
      list = [...document.querySelectorAll(ancestor)]
      i = indexOf(list, document.querySelector(ancestor))
    } else if (isElement(ancestor)) {
      list = getSiblings(ancestor, true)
      i = indexOf(list, ancestor)
    }
  } else {
    list = getSiblings(ancestor, true)
    i = indexOf(list, ancestor)
  }

  return i
}

export default index
