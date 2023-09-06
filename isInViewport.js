import getViewportHeight from './getViewportHeight'
import getViewportWidth from './getViewportWidth'

const isInViewport = (el) => {
  const rect = el.getBoundingClientRect()
  const vh = getViewportHeight()
  const vw = getViewportWidth()

  return (
    rect.top >= 0 && rect.left >= 0 && rect.bottom <= vh && rect.right <= vw
  )
}

export default isInViewport
