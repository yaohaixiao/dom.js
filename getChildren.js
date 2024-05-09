import getChildrenBy from './getChildrenBy'
import getEl from './getEl'
import siblings from './siblings'

/**
 * @method getChildren
 * @since 1.10.0
 * @param {String | HTMLElement} el The HTMLElement or an ID to use as the starting point
 * @param {Function} [filter]
 * @return {Array} A static array of HTMLElements
 */
const getChildren = (el, filter) => {
  const $el = getEl(el)
  let children= []

  if (!$el) {
    return children
  }

  if(filter){
    children = getChildrenBy($el, filter)
  } else {
    children = siblings($el.firstElementChild, true)
  }

  return children
}

export default getChildren
