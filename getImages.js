import getEl from './getEl'

/**
 * 返回这个页面页或者某个DOM元素下的所有图片路径的数组
 * ========================================================================
 * @method getImages
 * @since 1.6.0
 * @param {String} el
 * @param {Boolean} includeDuplicates
 * @return Array
 */
const getImages = (el = 'body', includeDuplicates = false) => {
  const $el = getEl(el)
  const images = [...$el.getElementsByTagName('img')].map((img) =>
    img.getAttribute('src')
  )

  return includeDuplicates ? images : [...new Set(images)]
}

export default getImages
