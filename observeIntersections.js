import isFunction from './utils/types/isFunction'
import isElement from './isElement'

/**
 * 通用的 IntersectionObserver 观察者处理器
 * ========================================================================
 * @method observeIntersections
 * @since 1.7.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver
 * @sse https://developer.mozilla.org/zh-CN/docs/Web/API/Intersection_Observer_API
 * @param {HTMLElement} el
 * @param {Function} fn
 * @param {Object} [props]
 * @param {String} [props.selector]
 * @param {Object} [props.context]
 * @param {Object|HTMLElement} [props.root]
 * @param {Array} [props.thresholds]
 * @param {Number} [props.intersectionRatio]
 * @param {String} [props.rootMargin]
 * @return {IntersectionObserver}
 */
const observeIntersections = (el, fn, props = {}) => {
  const root = el || null
  const selector = props.selector || 'h1,h2,h3,h4,h5,h6'
  const context = props.context || null
  const thresholds = props.thresholds || [0]
  const intersectionRatio = props.intersectionRatio || 0
  const rootMargin = props.rootMargin || '0px 0px -90% 0px'
  const options = {
    rootMargin,
    thresholds
  }
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const target = entry.target
      if (entry.intersectionRatio > intersectionRatio) {
        if (isFunction(fn)) {
          fn.call(context || target, target)
        }
      }
    })
  }, options)
  const $root = isElement(root) ? root : document

  if (root) {
    options.root = root
  }

  $root.querySelectorAll(selector).forEach((section) => {
    observer.observe(section)
  })

  return observer
}

export default observeIntersections
