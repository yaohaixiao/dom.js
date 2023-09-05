import easeInQuad from './utils/easeInQuad'
import isFunction from './utils/isFunction'
import isElement from './utils/isElement'

/**
 * 指定 DOM 节点滚动到指定 top 位置
 * ========================================================================
 * @method scrollTo
 * @param {HTMLElement|String} el - （必须）要滚动的 DOM 节点
 * @param {Number} top - （必须）滚动的 scrollTop 数值
 * @param {Function} [afterStop] - （可选）滚动完成的回调函数
 */
const scrollTo = (el, top, afterStop) => {
  const $el = isElement(el) ? el : document.querySelector(el)
  let scrollTop = $el.scrollTop
  let step = 0
  const distance = top - scrollTop
  const MAX_HEIGHT = $el.scrollHeight
  const MAX_TOP = top - MAX_HEIGHT <= 0 ? top : MAX_HEIGHT
  const stop = (top) => {
    if (isFunction(afterStop)) {
      afterStop(top)
    }

    return false
  }
  const play = () => {
    step += 1

    // 向上滚动
    if (distance < 0) {
      scrollTop -= easeInQuad(step)
      $el.scrollTop = scrollTop

      if (scrollTop <= top) {
        $el.scrollTop = top
        return stop(top)
      }
    } else {
      scrollTop += easeInQuad(step)
      $el.scrollTop = scrollTop

      if (scrollTop >= MAX_TOP) {
        $el.scrollTop = MAX_TOP
        return stop(MAX_TOP)
      }
    }

    requestAnimationFrame(play)
  }

  requestAnimationFrame(play)
}

export default scrollTo
