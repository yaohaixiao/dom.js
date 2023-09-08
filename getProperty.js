const getProperty = (prop) => {
  const documentElement = document.documentElement
  documentElement.style.getPropertyValue(prop)
}

export default getProperty
