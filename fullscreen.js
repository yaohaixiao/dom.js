import getEl from './getEl'

/**
 * 指定（某个DOM元素）进入或者退出全屏模式
 * ========================================================================
 * @method fullscreen
 * @since 1.6.0
 * @see https://developer.mozilla.org/zh-CN/docs/Web/API/Element/requestFullscreen
 * @param {Boolean} [mode]
 * @param {String} [el]
 */
const fullscreen = (mode = true, el = 'body') => {
  const $el = getEl(el)
  mode ? $el.requestFullscreen() : document.exitFullscreen()
}

export default fullscreen
