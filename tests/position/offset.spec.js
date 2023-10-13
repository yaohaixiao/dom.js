/**
 * @jest-environment jsdom
 */
import offset from '@/offset'
import byId from '@/byId'

describe('offset() 方法', () => {
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

  const originalOffsetLeft = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    'offsetLeft'
  )
  const originalOffsetTop = Object.getOwnPropertyDescriptor(
    HTMLElement.prototype,
    'offsetTop'
  )
  const $list = byId('#list')

  beforeAll(() => {
    Object.defineProperty(HTMLElement.prototype, 'offsetLeft', {
      configurable: true,
      writable: true,
      value: 0
    })
    Object.defineProperty(HTMLElement.prototype, 'offsetTop', {
      configurable: true,
      writable: true,
      value: 0
    })
    Object.defineProperty(HTMLElement.prototype, 'offsetParent', {
      get() {
        return this.parentNode
      }
    })
  })

  afterAll(() => {
    Object.defineProperty(
      HTMLElement.prototype,
      'offsetLeft',
      originalOffsetLeft
    )
    Object.defineProperty(HTMLElement.prototype, 'offsetTop', originalOffsetTop)
  })

  it('offset() 不传递参数，返回：null', () => {
    expect(offset()).toBe(null)
  })

  it('offset($list) 返回：40', () => {
    const position = {
      top: 0,
      left: 0
    }

    $list.offsetLeft = 40
    $list.offsetTop = 40

    position.left = offset($list).left
    position.top = offset($list).top

    expect(position.left).toEqual(40)
    expect(position.top).toEqual(40)
  })

  it('offset($home)，父节点的 offsetLeft=40，offsetTop=40，自身 offsetLeft=20，offsetTop=10，返回：{left: 60, top: 50}', () => {
    const position = {
      top: 0,
      left: 0
    }
    const $home = byId('#item-home')

    $list.offsetLeft = 40
    $list.offsetTop = 40

    $home.offsetLeft = 20
    $home.offsetTop = 10

    position.left = offset($home).left
    position.top = offset($home).top

    expect(position.left).toEqual(60)
    expect(position.top).toEqual(50)
  })
})
