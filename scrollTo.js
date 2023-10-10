import easeInQuad from './utils/lang/easeInQuad'
import isFunction from './utils/types/isFunction'
import isElement from './isElement'
import getEl from './getEl'

/**
 * 使 DOM 节点滚动到指定位置
 * ========================================================================
 * @method scrollTo
 * @param {HTMLElement|String} el - （必须）要滚动的 DOM 节点
 * @param {Number} position - （必须）滚动的 scrollTop 数值
 * @param {String|Function} [direction] - （可选）滚动方向，默认值：'top'
 * @param {Function} [afterStop] - （可选）滚动完成的回调函数
 */
const scrollTo = (el, position, direction = 'vertical', afterStop = null) => {
  const $el = isElement(el) ? el : getEl(el)
  let scrollValue = direction === 'vertical' ? $el.scrollTop : $el.scrollLeft
  let step = 0
  const distance = position - scrollValue
  const MAX_VALUE =
    direction === 'vertical' ? $el.scrollHeight : $el.scrollWidth
  const MAX_POSITION = position - MAX_VALUE <= 0 ? position : MAX_VALUE
  const stop = (pos) => {
    if (isFunction(direction)) {
      direction(pos)
    } else if (isFunction(afterStop)) {
      afterStop(pos)
    }

    return false
  }
  const play = () => {
    step += 1

    if (distance < 0) {
      scrollValue -= easeInQuad(step)
      $el.scrollTop = scrollValue

      if (scrollValue <= position) {
        $el.scrollTop = position
        return stop(position)
      }
    } else {
      scrollValue += easeInQuad(step)
      $el.scrollTop = scrollValue

      if (scrollValue >= MAX_POSITION) {
        $el.scrollTop = MAX_POSITION
        return stop(MAX_POSITION)
      }
    }

    requestAnimationFrame(play)
  }

  requestAnimationFrame(play)
}

export default scrollTo
