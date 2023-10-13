/**
 * @jest-environment jsdom
 */
import innerWidth from '@/innerWidth'
import byId from '@/byId'
import setStyle from '@/setStyle'

describe('innerWidth() 方法', () => {
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

  const originalOffsetWidth = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    'offsetWidth'
  )
  const $list = byId('#list')

  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
      configurable: true,
      writable: true,
      value: 30
    })
  })

  afterAll(() => {
    Object.defineProperty(
      HTMLElement.prototype,
      'offsetWidth',
      originalOffsetWidth
    )
  })

  it('innerWidth() 不传递任何参数，返回：false', () => {
    expect(innerWidth()).toBe(false)
  })

  it('innerWidth($list) 获取 $list 高度，返回：30', () => {
    expect(innerWidth($list)).toEqual(30)

    setStyle($list, 'padding', '5px 0')
    expect(innerWidth($list)).toEqual(30)

    setStyle($list, 'border', '5px solid #ddd')
    expect(innerWidth($list)).toEqual(20)

    expect(
      innerWidth($list, (el, { offsetWidth }) => {
        return offsetWidth
      })
    ).toEqual(30)
  })

  it('innerWidth($list, 60) 设置 $list 的 innerHeight 宽度，再用 innerWidth($list) 获取宽度，返回：40', () => {
    setStyle($list, 'border', 'none')
    expect(innerWidth($list)).toEqual(30)

    innerWidth($list, 60)
    $list.offsetWidth = 60
    expect(innerWidth($list)).toEqual(60)

    setStyle($list, 'border', '10px solid #ddd')
    expect(innerWidth($list)).toEqual(40)
  })
})
