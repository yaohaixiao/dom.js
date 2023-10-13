/**
 * @jest-environment jsdom
 */
import height from '@/height'
import byId from '@/byId'
import getStyle from '@/getStyle'

describe('height() 方法', () => {
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

  const originalOffsetHeight = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    'offsetHeight'
  )
  const $list = byId('#list')

  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetHeight', {
      configurable: true,
      writable: true,
      value: 30
    })
  })

  afterAll(() => {
    Object.defineProperty(
      HTMLElement.prototype,
      'offsetHeight',
      originalOffsetHeight
    )
  })

  it('height() 不传递任何参数，返回：false', () => {
    expect(height()).toBe(false)
  })

  it(`height($list, false) 参数 val 不为 String 或者 Number 类型，返回：false`, () => {
    expect(height($list, false)).toBe(false)
    expect(height($list, () => {})).toBe(false)
  })

  it('height($list) 获取 $list 的高度，返回：30', () => {
    expect(height($list)).toEqual(30)
  })

  it(`height($list, '14px') 设置 $list 的 width 高度（字符串），然后再用 height($list) 获取 $list 的 height 高度，返回：14`, () => {
    height($list, '14px')
    expect(getStyle($list, 'height')).toEqual('14px')

    $list.offsetHeight = 14
    expect(height($list)).toEqual(14)
  })

  it(`height($list, 24) 设置 $list 的 width 高度（数值），然后再用 height($list) 获取 $list 的 height 高度，返回：24`, () => {
    height($list, 24)
    expect(getStyle($list, 'height')).toEqual('24px')

    $list.offsetHeight = 24
    expect(height($list)).toEqual(24)
  })
})
