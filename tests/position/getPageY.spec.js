/**
 * @jest-environment jsdom
 */
import getPageY from '@/getPageY'

describe('getPageY() 方法', () => {
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

  let pageY = 0
  let lastY = 0
  const ie11 =
    'Mozilla/5.0 (Windows NT 10.0; WOW64; Trident/7.0; rv:11.0) like Gecko'
  const $list = document.querySelector('#list')
  const fn = jest.fn()
  const getY = function (evt) {
    pageY = getPageY(evt)
    fn.mockImplementation((base) => base + 40)
    pageY = fn(lastY)
  }

  it('非 IE 浏览器，调用 getPageY()：', () => {
    const $faqs = document.querySelector('a[data-id="faqs"]')

    $list.addEventListener('click', getY, false)
    $list.click()

    lastY = pageY

    expect(pageY).toEqual(40)
    expect(fn).toHaveBeenCalled()

    $faqs.addEventListener('click', getY, false)
    $faqs.click()

    expect(pageY).toEqual(80)
    expect(fn).toHaveBeenCalled()
  })

  it('IE 浏览器，调用 getPageY()：', () => {
    const $user = document.querySelector('a[data-id="user"]')

    navigator.userAgent = ie11
    document.scrollTop = 20
    pageY = 0

    $list.addEventListener('click', getY, false)
    $list.click()

    lastY = pageY

    expect(pageY).toEqual(80)
    expect(fn).toHaveBeenCalled()

    document.scrollTop = 30

    $user.addEventListener('click', getY, false)
    $user.click()

    expect(pageY).toEqual(120)
    expect(fn).toHaveBeenCalled()
  })
})
