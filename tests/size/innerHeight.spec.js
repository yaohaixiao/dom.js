/**
 * @jest-environment jsdom
 */
import innerHeight from '@/innerHeight'
import byId from '@/byId'
import setStyle from '@/setStyle'

describe('innerHeight() 方法', () => {
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

  it('innerHeight() 不传递任何参数，返回：false', () => {
    expect(innerHeight()).toBe(false)
  })

  it('innerHeight($list) 获取 $list 的 innerHeight 高度，返回：30', () => {
    expect(innerHeight($list)).toEqual(30)

    setStyle($list, 'padding', '5px 0')
    expect(innerHeight($list)).toEqual(30)

    setStyle($list, 'border', '5px solid #ddd')
    expect(innerHeight($list)).toEqual(20)

    expect(innerHeight($list, (el, {offsetHeight})=>{return offsetHeight})).toEqual(30)
  })

  it('innerHeight($list, 60) 设置 $list 的 innerHeight 高度，再用 innerHeight($list) 获取高度，返回：40', () => {
    setStyle($list, 'border', 'none')
    expect(innerHeight($list)).toEqual(30)

    innerHeight($list, 60)
    $list.offsetHeight = 60
    expect(innerHeight($list)).toEqual(60)

    setStyle($list, 'border', '10px solid #ddd')
    expect(innerHeight($list)).toEqual(40)
  })
})
