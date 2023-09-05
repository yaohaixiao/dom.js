const isAncestor = (ancestor, descendent) => {
  let result = false

  if (!ancestor || !descendent || !ancestor.nodeType || !descendent.nodeType) {
    return result
  }

  if (ancestor.contains && ancestor !== descendent) {
    result = ancestor.contains(descendent)
  } else if (ancestor.compareDocumentPosition) {
    result = !!(ancestor.compareDocumentPosition(descendent) & 16)
  }

  return result
}

export default isAncestor
