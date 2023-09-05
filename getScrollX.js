const getScrollX = (el = window) => {
  return el.scrollX !== undefined ? el.scrollX : el.scrollLeft
}

export default getScrollX
