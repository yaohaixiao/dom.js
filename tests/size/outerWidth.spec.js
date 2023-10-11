/**
 * @jest-environment jsdom
 */
import outerWidth from '@/outerWidth'
import byId from '@/byId'
import setStyle from '@/setStyle'

describe('outerWidth() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item" id="item-home">\n' +
    '    <span id="text">Home</span>\n' +
    '    <a href="/sitemap#home" class="remove" data-id="home">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item" id="item-support">\n' +
    '    <span>Support</span>\n' +
    '    <a href="/sitemap#support" class="remove" data-id="support">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item" id="item-faqs">\n' +
    '    <span>FAQs</span>\n' +
    '    <a href="/sitemap#faqs" class="remove" data-id="faqs">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item" id="item-user">\n' +
    '    <span>FAQs</span>\n' +
    '    <a href="/sitemap#user" class="remove" data-id="user">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item" id="item-exit">\n' +
    '    <span>退出</span>\n' +
    '    <a href="/sitemap#exit" class="remove" data-id="exit">删除</a>\n' +
    '  </li>\n' +
    '</ul>'

  const originalOffsetWidth = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetWidth')
  const $list = byId('#list')

  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', { configurable: true, writable: true, value: 30 })
  })

  afterAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', originalOffsetWidth)
  })

  it('outerWidth() 不传递任何参数，返回：false', () => {
    expect(outerWidth()).toBe(false)
  })

  it('outerWidth($list) 获取 $list 的 outerWidth 宽度，返回：30', () => {
    expect(outerWidth($list)).toEqual(30)

    setStyle($list, 'padding', '0 5px')
    expect(outerWidth($list)).toEqual(30)

    setStyle($list, 'border', '5px solid #ddd')
    expect(outerWidth($list)).toEqual(30)

    expect(outerWidth($list, (el, {offsetWidth})=>{return offsetWidth})).toEqual(30)
  })

  it('outerWidth($list, 60) 设置 $list 的 outerWidth 宽度，再用 outerWidth($list) 获取宽度，返回：40', () => {
    setStyle($list, 'border', 'none')
    setStyle($list, 'padding', 'none')
    expect(outerWidth($list)).toEqual(30)

    outerWidth($list, 60, true)
    $list.offsetWidth = 60
    setStyle($list, 'margin', '0 10px')
    setStyle($list, 'border', '0 10px')
    setStyle($list, 'padding', '0 10px')
    expect(outerWidth($list, true)).toEqual(80)
  })
})
