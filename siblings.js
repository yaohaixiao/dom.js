import getSiblings from './getSiblings'

const siblings = (el, includeSelf = false) => {
  return getSiblings(el, includeSelf)
}

export default siblings
