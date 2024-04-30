import isWindow from './isWindow'

/**
 * @method getNodeName
 * @since 1.9.0
 * @see https://github.com/floating-ui/floating-ui
 * @param node
 * @return {string|string}
 */
const getNodeName = (node) => {
  return isWindow(node) ? '' : node ? (node.nodeName || '').toLowerCase() : ''
}

export default getNodeName
