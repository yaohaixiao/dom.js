const onClickOutside = (element, callback) => {
  document.addEventListener('click', (e) => {
    if (!element.contains(e.target)) {
      callback()
    }
  })
}

export default onClickOutside
