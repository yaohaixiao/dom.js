/**
 * @jest-environment jsdom
 */
import getPageX from '@/getPageX'

describe('getPageX() 方法', () => {
  Object.defineProperty(
    window.navigator,
    'userAgent',
    ((value) => ({
      get() {
        return value
      },

      set(v) {
        value = v
      }
    }))(window.navigator.userAgent)
  )

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

  let pageX = 0
  let lastX = 0
  const ie11 =
    'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko'
  const $list = document.querySelector('#list')
  const fn = jest.fn()
  const getX = function (evt) {
    pageX = getPageX(evt)
    fn.mockImplementation((base) => base + 40)
    pageX = fn(lastX)
  }

  it('非 IE 浏览器，调用 getPageX()：', () => {
    const $support = document.querySelector('a[data-id="support"]')

    $list.addEventListener('click', getX, false)
    $list.click()

    lastX = pageX

    expect(pageX).toEqual(40)
    expect(fn).toHaveBeenCalled()

    $support.addEventListener('click', getX, false)
    $support.click()

    expect(pageX).toEqual(80)
    expect(fn).toHaveBeenCalled()
  })

  it('IE 浏览器，调用 getPageX()：', () => {
    const $support = document.querySelector('a[data-id="support"]')

    navigator.userAgent = ie11
    document.scrollLeft = 20
    pageX = 0

    $list.addEventListener('click', getX, false)
    $list.click()

    lastX = pageX

    expect(pageX).toEqual(80)
    expect(fn).toHaveBeenCalled()

    document.scrollLeft = 30

    $support.addEventListener('click', getX, false)
    $support.click()

    expect(pageX).toEqual(120)
    expect(fn).toHaveBeenCalled()
  })
})
