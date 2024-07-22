export default DOM;
declare namespace DOM {
    export { isBrowser };
    export { isDeno };
    export { isNodeJs };
    export { isMobile };
    export { isWebKit };
    export { browser };
    export { os };
}
import isBrowser from '../isBrowser';
import isDeno from '../isDeno';
import isNodeJs from '../isNodeJs';
import isMobile from '../isMobile';
import isWebKit from '../isWebKit';
import browser from '../browser';
import os from '../os';
