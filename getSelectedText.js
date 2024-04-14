/**
 * @method getSelectedText
 * @since 1.7.0
 * @see
 * @returns {string}
 */
const getSelectedText = () => {
  return window.getSelection().toString();
}

export default getSelectedText
