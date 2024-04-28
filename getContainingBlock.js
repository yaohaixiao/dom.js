import getHostOrParent from './getHostOrParent'
import getNodeName from './getNodeName'
import isShadowRoot from './isShadowRoot'
import isElement from './isElement'

const getContainingBlock = (el) => {
  let currentNode = getHostOrParent(el);

  if (isShadowRoot(currentNode)) {
    currentNode = currentNode.host;
  }

  while (
    isElement(currentNode) &&
    !['html', 'body'].includes(getNodeName(currentNode))
    ) {
    if (isContainingBlock(currentNode)) {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
}

export default getContainingBlock
