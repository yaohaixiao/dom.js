/**
 * @jest-environment jsdom
 */
import getScroll from '@/getScroll'
import getScrollLeft from '@/getScrollLeft'
import getScrollTop from '@/getScrollTop'
import byId from '@/byId'

describe('getScroll() 方法', () => {
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

  Object.defineProperty(
    document,
    'documentElement',
    ((value) => ({
      get() {
        return value
      },

      set(v) {
        value = v
      }
    }))(document.documentElement)
  )

  const documentElement = document.documentElement

  it('通过 window 获取：', () => {
    window.scrollX = 0
    window.scrollY = 10

    const scrollXY = getScroll()

    expect(scrollXY.top).toEqual(getScrollTop())
    expect(scrollXY.left).toEqual(getScrollLeft())
  })

  it('通过 document 获取：', () => {
    let scrollXY = []
    const $body = document.body

    documentElement.scrollTop = 10
    documentElement.scrollLeft = 0
    scrollXY = getScroll(document)

    expect(scrollXY.top).toEqual(10)
    expect(scrollXY.left).toEqual(0)

    $body.scrollTop = 0
    $body.scrollLeft = 10
    scrollXY = getScroll(document)

    expect(scrollXY.top).toEqual(10)
    expect(scrollXY.left).toEqual(10)
  })

  it('通过 DOM 节点获取：', () => {
    let scrollXY = []
    const $list = byId('#list')

    $list.scrollTop = 0
    $list.scrollLeft = 10
    scrollXY = getScroll($list)

    expect(scrollXY.top).toEqual(0)
    expect(scrollXY.left).toEqual(10)
  })
})
