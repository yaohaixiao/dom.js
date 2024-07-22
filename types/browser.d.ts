export default browser;
/**
 * 检测浏览器信息，返回浏览器名称和版本信息
 * ========================================================================
 * @method browser
 * @see https://stackoverflow.com/questions/9514179/how-to-find-the-operating-system-details-using-javascript
 * @return {{major: number, name: string, version: string}}
 */
declare function browser(): {
    major: number;
    name: string;
    version: string;
};
