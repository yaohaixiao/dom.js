export default os;
/**
 * 检测当前操作系统信息，返回操作名称合版本信息
 * ========================================================================
 * @method os
 * @see https://stackoverflow.com/questions/9514179/how-to-find-the-operating-system-details-using-javascript
 * @return {{name: string, version: string}}
 */
declare function os(): {
    name: string;
    version: string;
};
