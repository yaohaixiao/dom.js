export default DOM;
declare namespace DOM {
    export { getBoundingClientRect };
    export { getDocumentRect };
    export { getViewportRect };
    export { inBounding };
    export { inViewport };
}
import getBoundingClientRect from '../getBoundingClientRect';
import getDocumentRect from '../getDocumentRect';
import getViewportRect from '../getViewportRect';
import inBounding from '../inBounding';
import inViewport from '../inViewport';
