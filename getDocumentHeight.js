import getViewportHeight from './getViewportHeight'

const getDocumentHeight = () => {
  const scrollHeight =
    document.documentElement.scrollHeight || document.body.scrollHeight
  return Math.max(scrollHeight, getViewportHeight())
}

export default getDocumentHeight
