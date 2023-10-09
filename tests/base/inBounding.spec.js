/**
 * @jest-environment jsdom
 */
import inBounding from '@/inBounding'
import text from '@/text'
import byId from '@/byId'
import toggle from '@/toggle'

describe('inBounding() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item item-home" id="item-home">\n' +
    '    <span>Home</span>\n' +
    '    <a href="/sitemap#home" class="remove" data-id="home">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item item-support item-ok" id="item-support">\n' +
    '    <span>Support</span>\n' +
    '    <a href="/sitemap#support" class="remove" data-id="support">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item item-faqs" id="item-faqs">\n' +
    '    <span>FAQs</span>\n' +
    '    <a href="/sitemap#faqs" class="remove" data-id="faqs">删除</a>\n' +
    '  </li>\n' +
    '</ul>'

  it(`inBounding() 不传递参数，返回：false`, () => {
    expect(inBounding()).toBe(false)
  })

  it(`动态创建 DOM 节点，未追加到文档中，inBounding($text) 返回：false`, () => {
    const $text = text('动态创建 DOM 节点')

    expect(inBounding($text, document.body)).toBe(false)
  })

  it(`inBounding($list, $home) 检测父节点中的子节点是否在父节点返回，返回：true`, () => {
    const $list = byId('#list')
    const $home = byId('#item-home')

    expect(inBounding($home, $list)).toBe(true)
  })

  it(`inBounding($list, $home) 将父节点中的子节点设置为 fixed 定位，定位到父节区域之外，返回：false`, () => {
    const $list = byId('#list')
    const $home = byId('#item-home')

    $home.getBoundingClientRect = jest.fn(() => ({
      x: -851.671875,
      y: -200.046875,
      width: 8.34375,
      height: 17,
      top: -967.046875,
      right: -860.015625,
      bottom: 22984.046875,
      left: 44851.671875
    }))

    expect(inBounding($home, $list)).toBe(false)
  })
})
