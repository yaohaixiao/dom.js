import isElement from './utils/isElement'
import isString from './utils/isString'
import isArray from './utils/isArray'
import getSiblings from './getSiblings'

const index = function(el, target) {
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

  if (!target) {
    if (isString(el)) {
      list = [...document.querySelectorAll(el)]
      i = indexOf(list, document.querySelector(el))
    } else if (isElement(el)) {
      list = getSiblings(el, true)
      i = indexOf(list, el)
    }
  } else {
    list = getSiblings(el, true)
    i = indexOf(list, el)
  }

  return i
}

export default index
