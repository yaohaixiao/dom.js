import isFunction from './utils/types/isFunction'
import extend from './utils/lang/extend'

/**
 * 通用的 MutationObserver 观察者处理器
 * ========================================================================
 * @method observeMutations
 * @since 1.7.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver
 * @param {HTMLElement} el
 * @param {Function} fn
 * @param {Object} [props]
 * @returns {MutationObserver}
 */
const observeMutations = (el, fn, props = {}) => {
  const observer = new MutationObserver((mutations) =>
    mutations.forEach((m) => {
      if (isFunction(fn)) {
        fn(m)
      }
    })
  )
  const options = {
    childList: true,
    attributes: true,
    attributeOldValue: true,
    characterData: true,
    characterDataOldValue: true,
    subtree: true
  }

  extend(options, props)
  observer.observe(el, options)

  return observer
}

export default observeMutations
