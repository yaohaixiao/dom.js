/**
 * @jest-environment jsdom
 */
import getOffsetLeft from '@/getOffsetLeft'
import byId from '@/byId'

describe('getOffsetLeft() 方法', () => {
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

  const originalOffsetLeft = Object.getOwnPropertyDescriptor(HTMLElement.prototype, 'offsetLeft')
  const $list = byId('#list')

  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetLeft', { configurable: true, writable: true, value: 0 })
    Object.defineProperty(HTMLElement.prototype, 'offsetParent', {
      get() { return this.parentNode }
    })
  })

  afterAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetLeft', originalOffsetLeft)
  })

  it('getOffsetLeft() 不传递参数，返回：0', () => {
    expect(getOffsetLeft()).toEqual(0)
  })

  it('getOffsetLeft($list) 返回：40', () => {
    $list.offsetLeft = 40
    expect(getOffsetLeft($list)).toEqual(40)
  })

  it('getOffsetLeft($home)，父节点的 offsetLeft=40，自身 offsetLeft=20，返回：60', () => {
    const $list = byId('#list')
    const $home = byId('#item-home')

    $list.offsetLeft = 40
    $home.offsetLeft = 20
    expect(getOffsetLeft($home)).toEqual(60)
  })

  it('getOffsetLeft($text)，祖先节点 offsetLeft=10，父节点的 offsetLeft=40，自身 offsetLeft=20，返回：70', () => {
    const $list = byId('#list')
    const $home = byId('#item-home')
    const $text = byId('#text')

    $list.offsetLeft = 10
    $home.offsetLeft = 40
    $text.offsetLeft = 20
    expect(getOffsetLeft($text)).toEqual(70)
  })
})
