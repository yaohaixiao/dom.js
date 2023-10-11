/**
 * @jest-environment jsdom
 */
import outerHeight from '@/outerHeight'
import byId from '@/byId'
import setStyle from '@/setStyle'

describe('outerHeight() 方法', () => {
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

  const originalOffsetHeight = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetHeight')
  const $list = byId('#list')

  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', { configurable: true, writable: true, value: 30 })
  })

  afterAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', originalOffsetHeight)
  })

  it('outerHeight() 不传递任何参数，返回：false', () => {
    expect(outerHeight()).toBe(false)
  })

  it('outerHeight($list) 获取 $list 的 innerHeight 高度，返回：30', () => {
    expect(outerHeight($list)).toEqual(30)

    setStyle($list, 'padding', '5px 0')
    expect(outerHeight($list)).toEqual(30)

    setStyle($list, 'border', '5px solid #ddd')
    expect(outerHeight($list)).toEqual(30)

    expect(outerHeight($list, (el, {offsetHeight})=>{return offsetHeight})).toEqual(30)
  })

  it('outerHeight($list, 60) 设置 $list 的 outerHeight 高度，再用 outerHeight($list) 获取高度，返回：40', () => {
    setStyle($list, 'border', 'none')
    setStyle($list, 'padding', 'none')
    expect(outerHeight($list)).toEqual(30)

    outerHeight($list, 60, true)
    $list.offsetHeight = 60
    setStyle($list, 'margin', '10px 0')
    setStyle($list, 'border', '10px 0')
    setStyle($list, 'padding', '10px 0')
    expect(outerHeight($list, true)).toEqual(80)
  })
})
