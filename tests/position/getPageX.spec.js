/**
 * @jest-environment jsdom
 */
import getPageX from '@/getPageX'
import byId from '@/byId'
import setStyle from '@/setStyle'
import getStyle from '@/getStyle'
import toggle from '@/toggle'
import canPosition from '@/canPosition'
import getDocumentScrollLeft from '@/getDocumentScrollLeft'

describe('getPageX() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item" id="item-home">\n' +
    '    <span>Home</span>\n' +
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

  const $list = byId('#list')
  const fn = jest.fn()
  let pageX = 0

  it('getPageX() 不传递参数，返回：false', () => {
    expect(getPageX()).toBe(false)
  })

  it('getPageX($list) $list 节点无法定位，返回：false', () => {
    setStyle($list, 'display', 'none')
    expect(canPosition($list)).toBe(false)
    expect(getPageX($list)).toBe(false)
  })

  it('getPageX($list) 获取位置，返回：40', () => {
    toggle($list)
    expect(canPosition($list)).toBe(true)
    expect(getStyle($list, 'display')).toEqual('block')

    pageX = getPageX($list)
    fn.mockImplementation((base) => base + 40)
    pageX = fn(0)

    expect(pageX).toEqual(40)
    expect(fn).toHaveBeenCalled()
  })

  it('窗口横向滚动 40，getPageX($list) 获取位置，返回：80', () => {
    document.documentElement.scrollLeft = 40
    expect(getDocumentScrollLeft()).toEqual(40)

    pageX = getPageX($list)
    fn.mockImplementation((base) => base + 40)
    pageX = fn(40)

    expect(pageX).toEqual(80)
    expect(fn).toHaveBeenCalled()
  })
})
