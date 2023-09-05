const getDocumentScrollLeft = (doc) => {
  const $document = doc || document
  return Math.max(
    $document.documentElement.scrollLeft,
    $document.body.scrollLeft
  )
}

export default getDocumentScrollLeft
