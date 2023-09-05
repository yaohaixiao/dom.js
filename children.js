import siblings from './siblings'

const children = (el) => {
  return siblings(el.firstChild)
}

export default children
