/**
 *
 * @param form
 * @return {string}
 */
const serialize = (form) => {
  return new URLSearchParams(new FormData(form)).toString()
}

export default serialize
