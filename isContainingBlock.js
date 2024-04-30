import getStyles from './getStyles'
import browser from './browser'

/**
 * 用来检测 DOM 元素是否为布局和包含块
 * ========================================================================
 * @method isContainingBlock
 * @since 1.9.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/CSS/Containing_block#identifying_the_containing_block
 * @see https://github.com/floating-ui/floating-ui
 * @param {HTMLElement} el
 * @return {Boolean}
 */
const isContainingBlock = (el) => {
  const isFirefox = browser().name === 'Firefox'
  const css = getStyles(el)

  // 这里并没有详尽列举所有属性，但涵盖了创建包含块的最常见的CSS属性。
  return (
    css.transform !== 'none' ||
    css.perspective !== 'none' ||
    // @ts-ignore (TS 4.1 compat)
    css.contain === 'paint' ||
    ['transform', 'perspective'].includes(css.willChange) ||
    (isFirefox && css.willChange === 'filter') ||
    (isFirefox && (css.filter ? css.filter !== 'none' : false))
  )
}

export default isContainingBlock
