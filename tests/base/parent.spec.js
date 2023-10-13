/**
 * @jest-environment jsdom
 */
import parent from '@/parent'
import byId from '@/byId'
import setStyle from '@/setStyle'

describe('parent() 方法', () => {
  // Set up our document body
  document.body.innerHTML =
    '<ul id="list" class="list">\n' +
    '  <li class="item item-home" id="item-home">\n' +
    '    <span>Home</span>\n' +
    '    <a href="/sitemap#home" class="remove" data-id="home">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item item-support item-ok" id="item-support">\n' +
    '    <span>Support</span>\n' +
    '    <a href="/sitemap#support" class="remove" data-id="support">删除</a>\n' +
    '  </li>\n' +
    '  <li class="item item-faqs" id="item-faqs">\n' +
    '    <span>FAQs</span>\n' +
    '    <a href="/sitemap#faqs" class="remove" data-id="faqs">删除</a>\n' +
    '  </li>\n' +
    '</ul>'

  it(`parent() 不传递参数，返回：null`, () => {
    expect(parent()).toBe(null)
  })

  it(`parent($home) 默认获取 parentNode，返回：$list`, () => {
    const $home = byId('#item-home')
    const $list = byId('#list')

    expect(parent($home)).toEqual($list)
  })

  it(`parent($home, 'offset') 获取 offsetParent，返回：$list`, () => {
    const $home = byId('#item-home')
    const $list = byId('#list')

    Object.defineProperty(HTMLElement.prototype, 'offsetParent', {
      get() {
        return this.parentNode
      }
    })
    setStyle($list, 'position:relative')

    expect(parent($home, 'offset')).toEqual($list)
  })

  it(`parent($home, 'scroll') 获取 scrollParent，返回：$list`, () => {
    const $home = byId('#item-home')
    const $list = byId('#list')

    setStyle($list, 'overflow-y', 'auto')
    expect(parent($home, 'scroll')).toEqual($list)
  })
})
