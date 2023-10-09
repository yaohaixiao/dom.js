/**
 * @jest-environment jsdom
 */
import getPageY from '@/getPageY'
import byId from '@/byId'
import setStyle from '@/setStyle'
import getStyle from '@/getStyle'
import toggle from '@/toggle'
import canPosition from '@/canPosition'
import getDocumentScrollTop from '@/getDocumentScrollTop'

describe('getPageY() 方法', () => {
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
  let pageY = 0

  it('getPageY() 不传递参数，返回：false', () => {
    expect(getPageY()).toBe(false)
  })

  it('getPageY($list) $list 节点无法定位，返回：false', () => {
    setStyle($list, 'display', 'none')
    expect(canPosition($list)).toBe(false)
    expect(getPageY($list)).toBe(false)
  })

  it('getPageY($list) 获取位置，返回：40', () => {
    toggle($list)
    expect(canPosition($list)).toBe(true)
    expect(getStyle($list, 'display')).toEqual('block')

    pageY = getPageY($list)
    fn.mockImplementation((base) => base + 40)
    pageY = fn(0)

    expect(pageY).toEqual(40)
    expect(fn).toHaveBeenCalled()
  })

  it('窗口横向滚动 40，getPageY($list) 获取位置，返回：80', () => {
    document.documentElement.scrollTop = 40
    expect(getDocumentScrollTop()).toEqual(40)

    pageY = getPageY($list)
    fn.mockImplementation((base) => base + 40)
    pageY = fn(40)

    expect(pageY).toEqual(80)
    expect(fn).toHaveBeenCalled()
  })
})
