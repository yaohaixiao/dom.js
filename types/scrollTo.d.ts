export default scrollTo;
/**
 * 使 DOM 节点滚动到指定位置
 * ========================================================================
 * @method scrollTo
 * @param {HTMLElement|String} el - （必须）要滚动的 DOM 节点
 * @param {Number} position - （必须）滚动的 scrollTop 数值
 * @param {String|Function} [direction] - （可选）滚动方向，默认值：'top'
 * @param {Function} [afterStop] - （可选）滚动完成的回调函数
 */
declare function scrollTo(el: HTMLElement | string, position: number, direction?: string | Function, afterStop?: Function): void;
