const getScrollTop = (el = window) => {
  return el.scrollY !== undefined ? el.scrollY : el.scrollTop
}

export default getScrollTop
