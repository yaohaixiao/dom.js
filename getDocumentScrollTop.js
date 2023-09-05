const getDocumentScrollTop = (doc) => {
  const $document = doc || document
  return Math.max($document.documentElement.scrollTop, $document.body.scrollTop)
}

export default getDocumentScrollTop
