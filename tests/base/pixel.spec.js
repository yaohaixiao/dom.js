/**
 * @jest-environment jsdom
 */
import pixel from '@/pixel'
import getStyle from '@/getStyle'
import setStyle from '@/setStyle'
import byId from '@/byId'

describe('pixel() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item item-support item-ok" id="item-support">\n' +
    '    <span>Support</span>\n' +
    '    <a href="/sitemap#support" class="remove" data-id="support">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item item-faqs" id="item-faqs">\n' +
    '    <span>FAQs</span>\n' +
    '    <a href="/sitemap#faqs" class="remove" data-id="faqs">删除</a>\n' +
    '  </li>\n' +
    '</ul>'

  const $list = byId('#list')

  it(`pixel() 不传递参数，返回：false`, () => {
    expect(pixel()).toBe(false)
  })

  it(`pixel('23px') 将 CSS 属性值转数组：返回：23`, () => {
    setStyle($list, 'height', '23px')
    expect(pixel(getStyle($list, 'height'))).toEqual(23)
  })

  it(`pixel('23.4px') 针对浮点数值，直接向上取整：返回：24`, () => {
    setStyle($list, 'height', '23.4px')
    expect(pixel(getStyle($list, 'height'))).toEqual(24)
  })

  it(`pixel('23.4px 0 23px 45px') 针对浮点数值，直接向上取整：返回：[24, 0, 23, 45]`, () => {
    let margin

    setStyle($list, 'margin', '23.4px 0 23px 45px')
    margin = getStyle($list, 'margin')

    expect(pixel(margin)).toEqual([24, 0, 23, 45])
  })

  it(`pixel(23.4) 为数值添加 px：返回：'23.4px'`, () => {
    setStyle($list, 'height', pixel(23.4))
    expect(getStyle($list, 'height')).toEqual('23.4px')
  })
})
