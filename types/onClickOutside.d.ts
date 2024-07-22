export default onClickOutside;
/**
 * 用来处理点击 el 元素以外后执行一些操作。通常用于在弹出窗口后菜单后，点击页面其它
 * DOM 元素，隐藏弹出的窗口或者菜单。
 * ========================================================================
 * @method onClickOutside
 * @since 1.7.0
 * @param {HTMLElement} el
 * @param {Function} callback
 */
declare function onClickOutside(el: HTMLElement, callback: Function): boolean;
