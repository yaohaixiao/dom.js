import isWindow from './isWindow'

const getNodeName = (node) => {
  return isWindow(node) ? '' : node ? (node.nodeName || '').toLowerCase() : '';
}

export default getNodeName
