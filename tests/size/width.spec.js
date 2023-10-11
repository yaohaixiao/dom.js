/**
 * @jest-environment jsdom
 */
import width from '@/width'
import byId from '@/byId'
import getStyle from '@/getStyle'

describe('width() 方法', () => {
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

  it('width() 不传递任何参数，返回：false', () => {
    expect(width()).toBe(false)
  })

  it(`width($list, false) 参数 val 不为 String 或者 Number 类型，返回：false`, () => {
    expect(width($list, false)).toBe(false)
    expect(width($list, ()=>{})).toBe(false)
  })

  it('width($list) 获取 $list 的宽度，返回：30', () => {
    expect(width($list)).toEqual(30)
  })

  it(`width($list, '14px') 设置 $list 的 width 宽度（字符串），然后再用 width($list) 获取 $list 的 width 宽度，返回：14`, () => {
    width($list, '14px')
    expect(getStyle($list, 'width')).toEqual('14px')

    $list.offsetWidth = 14
    expect(width($list)).toEqual(14)
  })

  it(`width($list, 24) 设置 $list 的 width 宽度（数值），然后再用 width($list) 获取 $list 的 width 宽度，返回：24`, () => {
    width($list, 24)
    expect(getStyle($list, 'width')).toEqual('24px')

    $list.offsetWidth = 24
    expect(width($list)).toEqual(24)
  })
})
