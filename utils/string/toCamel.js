const toCamel = (prop) => {
  const props = {}

  function toUpper(x, l) {
    return l.toUpperCase()
  }

  return (
    props[prop] ||
    (props[prop] =
      prop.indexOf('-') === -1 ? prop : prop.replace(/-([a-z])/gi, toUpper))
  )
}

export default toCamel
