/**
 * @jest-environment jsdom
 */
import getOffsetTop from '@/getOffsetTop'
import byId from '@/byId'

describe('getOffsetTop() 方法', () => {
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

  const originalOffsetTop = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetTop')
  const $list = byId('#list')

  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetTop', { configurable: true, writable: true, value: 0 })
    Object.defineProperty(HTMLElement.prototype, 'offsetParent', {
      get() { return this.parentNode }
    })
  })

  afterAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', originalOffsetTop)
  })

  it('getOffsetTop() 不传递参数，返回：0', () => {
    expect(getOffsetTop()).toEqual(0)
  })

  it('getOffsetTop($list) 返回：40', () => {
    $list.offsetTop = 40
    expect(getOffsetTop($list)).toEqual(40)
  })

  it('getOffsetTop($home)，父节点的 offsetTop=40，自身 offsetTop=20，返回：60', () => {
    const $list = byId('#list')
    const $home = byId('#item-home')

    $list.offsetTop = 40
    $home.offsetTop = 20
    expect(getOffsetTop($home)).toEqual(60)
  })

  it('getOffsetTop($text)，祖先节点 offsetTop=10，父节点的 offsetTop=40，自身 offsetTop=20，返回：70', () => {
    const $list = byId('#list')
    const $home = byId('#item-home')
    const $text = byId('#text')

    $list.offsetTop = 10
    $home.offsetTop = 40
    $text.offsetTop = 20
    expect(getOffsetTop($text)).toEqual(70)
  })
})
